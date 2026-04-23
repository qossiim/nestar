import { Module } from '@nestjs/common';
import { BoardArticleResolver } from './board-article.resolver';
import { BoardArticleService } from './board-article.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardArticle } from '../../libs/dto/board-article/board-article';
import BoardArticleSchema from '../../schemas/BoardArticle.model';
import { MemberModule } from '../member/member.module';
import { ViewModule } from '../view/view.module';
import { AuthModule } from '../auth/auth.module';
import { Like } from '../../libs/dto/like/like';
import { LikeModule } from '../like/like.module';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: BoardArticle.name,
				schema: BoardArticleSchema,
			},
		]),
		AuthModule,
		MemberModule,
		ViewModule,
		LikeModule,
	],
	providers: [BoardArticleResolver, BoardArticleService],
	exports: [BoardArticleService],
})
export class BoardArticleModule {}