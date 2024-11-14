import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { MoviesService } from "./movies.service";

@Controller('movies')
export class MoviesController {
  constructor(private readonly movies: MoviesService) {
  }

  @Get()
  getAll() {
    return this.movies;
  }

  @Get("/:id")
  getOne(@Param("id") id: string) {
    return `This will return one movie with the id: ${id}`;
  }

  @Post()
  create(@Body() data) {
    return data;
  }

  @Delete("/:id")
  remove(@Param("id") id: string) {
    return `This will delete a movie with the id: ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() data) {
    return {
      updateMovie: id,
      ...data,
    };
  }
}
