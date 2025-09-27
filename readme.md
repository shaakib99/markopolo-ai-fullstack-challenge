# Markopolo AI Chat App

**Markopolo AI Chat App** is a part of a technical challenge designed to showcase integration of multiple data sources and messaging channels into a unified chat interface.  

This project demonstrates the ability to simulate real-time campaign recommendations: delivering the right message, to the right audience, at the right time, via the right channel.

---

## Technical Challenge

The challenge was to create a chat interface similar to **Perplexity** that allows users to:

1. Connect to various **data sources**.
2. Choose from multiple **messaging channels**.
3. Simulate streaming a structured JSON payload representing campaign execution.

### Requirements:

- **Data Sources:** GTM, Facebook Pixel, Google Ads Tag, Facebook Page, Website, Shopify, CRMs, Twitter Page, Review Sites, Ad Managers (Meta, Google, TikTok, etc.)  
- **Channels:** Email, SMS, Push, WhatsApp, Voice, Messenger, Ads  

For this challenge, the app integrates **3 data sources** and **4 channels** to simulate real-time campaign recommendations.

The output JSON payload can later be transformed into an executable marketing campaign for the selected channels.

---

## Features (Mock)

- **Unified Chat Interface:** Simulates a conversation similar to Perplexity AI.  
- **Data Source Integration:** Connects to multiple sources to collect insights.  
- **Channel Simulation:** Sends simulated campaign messages across chosen channels.  
- **JSON Campaign Payload:** Generates structured payloads representing the optimal campaign strategy.  
- **Dockerized Setup:** Easily run the project locally using Docker.

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/shaakib99/markopolo-ai-fullstack-challenge.git
```
```
cd markopolo-ai-chat
```
```
docker-compose up -d
```

The application will start at: http://localhost:3000

# Usage

- Open the app in your browser.

- Connect to your chosen data sources.

- Select the desired channels.

- Interact with the chat interface


Technology Stack

Frontend: React.js

Backend: FastAPI

Containerization: Docker & Docker Compose

