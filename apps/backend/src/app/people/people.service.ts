import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { People, PeopleDocument } from './schemas/people.schema';
import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PeopleService {

  constructor(
    @InjectModel(People.name) private peopleModel: Model<PeopleDocument>,
    ) {}
  

    async createPeople(
      createPeopleDTO: CreatePersonDto,
    ): Promise<People> {
      const newPeople = new this.peopleModel(createPeopleDTO);
      return newPeople.save();
    }
  
    async getPeoples(): Promise<People[]> {
      const peoples = await this.peopleModel.find();
      return peoples;
    }
  
    async getPeople(id: string): Promise<People> {
      const people = await this.peopleModel.findById(id);
      return people;
    }
  
    async deletePeople(id: string): Promise<any> {
      const people = await this.peopleModel.findByIdAndDelete(id);
      return people;
    }
  
    async updatePerson(
      id: string,
      updatePeopleDTO: UpdatePersonDto,
    ): Promise<People> {
      const updatedPeople = await this.peopleModel
        .findByIdAndUpdate(id, { $set: updatePeopleDTO }, { new: true })
        .exec();
      return updatedPeople;
    }
    
  /* async createPeople(createCatDto: CreatePersonDto): Promise<People> {
    const createdCat = new this.peopleModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<People[]> {
    return this.peopleModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  } */
}
