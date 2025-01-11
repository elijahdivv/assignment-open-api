import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) { }

    @Get('headlines')
    async getTopHeadlines() {
        return this.newsService.getTopHeadlines();
    }

    @Get('search')
    async searchNews(@Query('q') query: string) {
        if (!query) {
            return { error: 'Please provide a search query using the "q" parameter.' };
        }
        return this.newsService.searchNews(query);
    }
}
