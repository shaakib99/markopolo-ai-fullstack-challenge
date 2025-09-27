const request = async (url: string, options: RequestInit = {}): Promise<Response> => {
    try{
        return await fetch(url, options);
    }catch(error){
        return new Response(null, { status: 500, statusText: 'Network Error' });
    }
}

export default request;
