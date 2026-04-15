import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from '../../libs/enums/common.enum';
import { MemberService } from '../member/member.service';
import { Property } from '../../libs/property/property';
import { PropertyInput } from '../../libs/property/property.input';

@Injectable()
export class PropertyService {
	constructor(
		@InjectModel('Property')
		private readonly propertyModel: Model<Property>,
		private readonly memberService: MemberService,
	) {}

	public async createProperty(input: PropertyInput): Promise<Property> {
		try {
			const result = await this.propertyModel.create(input);

			await this.memberService.memberStatsEditor({
				_id: input.memberId,
				targetKey: 'memberProperties',
				modifier: 1,
			});

			return result;
		} catch (err: any) {
			console.log('Error, Service.model:', err.message);
			throw new BadRequestException(Message.CREATE_FAILED);
		}
	}
}