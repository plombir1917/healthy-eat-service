export interface IRepository {
  create(data: any): Promise<any>;

  findAll(): Promise<any>;

  findOne(data: any): Promise<any>;

  update(data: any): Promise<any>;

  delete(data: any): Promise<any>;
}
