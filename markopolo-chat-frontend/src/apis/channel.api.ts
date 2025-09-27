import request from './request';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const ChannelApi = {
    getOne: async (id: string): Promise<Response> => {
      return await request(`${API_URL}/channel/${id}`);
    },
    getAll: async (filter: Object): Promise<Response> => {
      return await request(`${API_URL}/channel`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    create: async (data: Object): Promise<Response> => {
      return await request(`${API_URL}/channel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    update: async (id: string, data: Object): Promise<Response> => {
      return await request(`${API_URL}/channel/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    delete: async (id: string): Promise<Response> => {
      return await request(`${API_URL}/channel/${id}`, {
        method: "DELETE",
      });
    },
}

export default ChannelApi;