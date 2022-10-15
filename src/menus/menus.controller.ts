import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MenuEntity } from './entities/menu.entity';

@ApiTags('Menus')
@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Post()
  @ApiCreatedResponse({ type: MenuEntity })
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menusService.create(createMenuDto);
  }

  @Get('drafts')
  @ApiOkResponse({ type: MenuEntity, isArray: true })
  findDrafts() {
    return this.menusService.findDrafts();
  }

  @Get()
  @ApiOkResponse({ type: MenuEntity, isArray: true })
  findAll() {
    return this.menusService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: MenuEntity })
  findOne(@Param('id') id: string) {
    return this.menusService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: MenuEntity })
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menusService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MenuEntity })
  remove(@Param('id') id: string) {
    return this.menusService.remove(+id);
  }
}
