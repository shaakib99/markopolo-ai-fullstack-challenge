import { useEffect, useState } from "react";
import { DefaultButton, DefaultInput, MessageBot, MessageUser } from "./components";
import { IMessage, ISource } from "./interfaces";
import { QueryApi, ChannelApi, DataSourceApi } from "./apis";
import { IChannel } from "./interfaces/channel.interface";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<Array<IMessage>>([]);
  const [sources, setSources] = useState<ISource[]>([]);
  const [channelList, setChannelList] = useState<IChannel[]>([]);
  const faqQuestions = [
    "Get me a list of users who have been inactive for 30 days",
    "List all users who signed up in the last 30 days",
    "List all users who have made a purchase in the last 30 days"
  ];

  useEffect(() => {
    const fetchDataSources = async () => {
      const response = await DataSourceApi.getAll({});
      if (response.ok) {
        const data = await response.json();
        setSources(data.map((item: any) => ({ title: item,  selected: false })));
      }
    };

    const fetchChannels = async () => {
      const response = await ChannelApi.getAll({});
      if (response.ok) {
        const data = await response.json();
        setChannelList(data.map((item: any) => ({ title: item, selected: false })));
      }
    };

    fetchChannels();
    fetchDataSources();
  }, []);


  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const newMessage: IMessage = { text: inputValue, sender: "user", success: true };
      setMessages([...messages, newMessage, { text: "...", sender: "bot", sources: [], success: true }]);
      setInputValue("");
      await handleQuery(inputValue.trim());

    }
  };

  const handleQuery = async (query: string) => {
    const response = await QueryApi.create({
      query,
      history: messages,
      sources: sources.filter(source => source.selected).map(source => source.title),
      channels: channelList.filter(channel => channel.selected).map(channel => channel.title)
    });
    if (!response.ok || !response.body) {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = { text: "...", sender: "bot", sources: [], success: false };
        return updatedMessages;
      });
      return;
    }

    const reader = response?.body?.getReader();
    const decoder = new TextDecoder("utf-8");
    let done = false;
    let botMessage = "";

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      botMessage += chunkValue;
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = { text: `<pre>[${botMessage + (done ? ']' : '...')}</pre>`, sender: "bot", success: true };
        return updatedMessages;
      });
    }

    if (!done) {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = { text: botMessage, sender: "bot", success: false };
        return updatedMessages;
      });
    }

    reader.releaseLock();
  };

  const handleFAQClick = (question: string) => {
    setInputValue(question);
    handleSendMessage();
  };

  return (
    <div className="container">
      <header>
        <div className="logo">Markopolo AI Chat</div>
      </header>
      <div className="chat-area">
        {messages.map((msg, index) => {
          if (msg.sender === "user") {
            return <MessageUser key={index} text={msg.text} sender={msg.sender} success={msg.success} />;
          } else {
            return <MessageBot key={index} text={msg.text} sources={msg.sources} sender={msg.sender} success={msg.success} />;
          }
        })}
        <div className="related-questions">
          <h3>Frequently Asked Questions</h3>
          <ul>
            {faqQuestions.map((question, index) => (
              <li key={index} onClick={() => handleFAQClick(question)}>{question}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="nav-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px' }}>
        <div>
          <strong>Channels</strong>
          <div className="nav-buttons">
            {channelList.map((channel, index) => (
              <button key={index} className={`source-button ${channel.selected ? "selected" : ""}`} onClick={() => {
                const updatedChannels = [...channelList];
                updatedChannels[index].selected = !updatedChannels[index].selected;
                setChannelList(updatedChannels);
              }}>
                {channel.title}
              </button>
            ))}
          </div>
        </div>
        <div className="nav-section">
          <strong>Data Sources</strong>
          <div className="nav-buttons">
            {sources.map((source, index) => (
              <button key={index} className={`source-button ${source.selected ? "selected" : ""}`} onClick={() => {
                const updatedSources = [...sources];
                updatedSources[index].selected = !updatedSources[index].selected;
                setSources(updatedSources);
              }}>
                {source.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="input-area">
        <DefaultInput classNames="" onChange={setInputValue} value={inputValue} placeholder="Type your query..." />
        <DefaultButton isLoading={false} label="Ask" onClick={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
