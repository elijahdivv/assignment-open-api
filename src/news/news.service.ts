import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';  // To convert observable to promise

@Injectable()
export class NewsService {
    constructor(private readonly httpService: HttpService) { }

    async getTopHeadlines(): Promise<any> {
        try {
            const response: AxiosResponse = await lastValueFrom(
                this.httpService.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        apiKey: 'd50d807e4f8344918635e3e4bc6c6d76',
                        country: 'us',
                    },
                }),
            );
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch news');
        }
    }

    async searchNews(query: string): Promise<any> {
        try {
            const response: AxiosResponse = await lastValueFrom(
                this.httpService.get('https://newsapi.org/v2/everything', {
                    params: {
                        apiKey: 'd50d807e4f8344918635e3e4bc6c6d76',
                        q: query, // The search query
                        language: 'en', // Optional: filter results by language
                        sortBy: 'relevance', // Sort results by relevance
                    },
                }),
            );
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch news');
        }
    }
}
