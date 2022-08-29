import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  HttpStatus,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}
  

  @Post()
  async createPeople(
    @Res() res,
    @Body() createPeopleDTO: CreatePersonDto,
  ) {
    const people = await this.peopleService.createPeople(
      createPeopleDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'People Successfully Created',
      people,
    });
  }


  @Get()
  async getPeoples(@Res() res) {
    const people = await this.peopleService.getPeoples();
    return res.status(HttpStatus.OK).json(people);
  }


  @Get('/:id')
  async getPeople(@Res() res, @Param('id') id) {
    const people = await this.peopleService.getPeople(id);
    if (!people)
      throw new NotFoundException('People does not exist!');
    return res.status(HttpStatus.OK).json(people);
  }


  @Delete('/:id')
  async deletePeople(@Res() res, @Param('id') id) {
    const people = await this.peopleService.deletePeople(id);
    if (!people)
      throw new NotFoundException('People does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'People Deleted Successfully',
      people,
    });
  }


  @Put('/:id')
  async updatePeople(
    @Res() res,
    @Body() updatePeopleDTO: UpdatePersonDto,
    @Param('id') id,
  ) {
    const people = await this.peopleService.updatePerson(
      id,
      updatePeopleDTO,
    );
    if (!people)
      throw new NotFoundException('People does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'People Updated Successfully',
      people,
    });
  }
 /*  @Post()
  async create(@Body() createPersonDto: CreatePersonDto) {
    const people = await this.peopleService.create(createPersonDto)
    return this.peopleService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.peopleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peopleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.peopleService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peopleService.remove(+id);
  } */
}
