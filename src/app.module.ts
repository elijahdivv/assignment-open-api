import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';  // Correct import for HttpModule
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';

@Module({
  imports: [HttpModule],
  controllers: [NewsController],
  providers: [NewsService],
})
export class AppModule { }
