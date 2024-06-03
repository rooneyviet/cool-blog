import { PrismaService } from 'src/prisma/prisma.service';
export declare class BaseCrudService<T, FindFirstArg, FindUniqueArg, FindManyArg, GroupByArg, AggregateArg, CreateArg, CreateManyArg, UpdateArg, UpdatedManyArg, DeleteArg, DeleteManyArg> {
    prisma: PrismaService;
    modelName: string;
    constructor(prisma: PrismaService);
    findFirst(args: FindFirstArg): Promise<T | null>;
    findUnique(args: FindUniqueArg): Promise<T | null>;
    findMany(args: FindManyArg): Promise<T[]>;
    groupBy(args: GroupByArg): any;
    aggregate(args: AggregateArg): any;
    create(args: CreateArg): Promise<T>;
    createMany(args: CreateManyArg): any;
    update(args: UpdateArg): Promise<T>;
    updateMany(args: UpdatedManyArg): Promise<T[]>;
    delete(args: DeleteArg): Promise<T>;
    deleteMany(args: DeleteManyArg): Promise<T[]>;
    private getModelName;
}
