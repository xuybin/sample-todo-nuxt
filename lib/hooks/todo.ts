/* eslint-disable */
import type { Prisma, Todo } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/vue-query';
import { getContext } from '@zenstackhq/tanstack-query/runtime/vue';
import {
    query,
    infiniteQuery,
    postMutation,
    putMutation,
    deleteMutation,
} from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';

export function useCreateTodo(
    options?: Omit<UseMutationOptions<Todo | undefined, unknown, Prisma.TodoCreateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = postMutation<Prisma.TodoCreateArgs, Todo, true>(
        'Todo',
        `${endpoint}/todo/create`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TodoCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Todo, Prisma.TodoGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TodoCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Todo, Prisma.TodoGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyTodo(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.TodoCreateManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = postMutation<Prisma.TodoCreateManyArgs, Prisma.BatchPayload, false>(
        'Todo',
        `${endpoint}/todo/createMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TodoCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TodoCreateManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyTodo<T extends Prisma.TodoFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TodoFindManyArgs>,
    options?: UseQueryOptions<Array<Prisma.TodoGetPayload<T>>>,
) {
    const { endpoint, fetch } = getContext();
    return query<Array<Prisma.TodoGetPayload<T>>>('Todo', `${endpoint}/todo/findMany`, args, options, fetch);
}

export function useInfiniteFindManyTodo<T extends Prisma.TodoFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TodoFindManyArgs>,
    options?: UseInfiniteQueryOptions<Array<Prisma.TodoGetPayload<T>>>,
) {
    const { endpoint, fetch } = getContext();
    return infiniteQuery<Array<Prisma.TodoGetPayload<T>>>('Todo', `${endpoint}/todo/findMany`, args, options, fetch);
}

export function useFindUniqueTodo<T extends Prisma.TodoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoFindUniqueArgs>,
    options?: UseQueryOptions<Prisma.TodoGetPayload<T>>,
) {
    const { endpoint, fetch } = getContext();
    return query<Prisma.TodoGetPayload<T>>('Todo', `${endpoint}/todo/findUnique`, args, options, fetch);
}

export function useFindFirstTodo<T extends Prisma.TodoFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TodoFindFirstArgs>,
    options?: UseQueryOptions<Prisma.TodoGetPayload<T>>,
) {
    const { endpoint, fetch } = getContext();
    return query<Prisma.TodoGetPayload<T>>('Todo', `${endpoint}/todo/findFirst`, args, options, fetch);
}

export function useUpdateTodo(
    options?: Omit<UseMutationOptions<Todo | undefined, unknown, Prisma.TodoUpdateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = putMutation<Prisma.TodoUpdateArgs, Todo, true>(
        'Todo',
        `${endpoint}/todo/update`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TodoUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Todo, Prisma.TodoGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TodoUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Todo, Prisma.TodoGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyTodo(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.TodoUpdateManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = putMutation<Prisma.TodoUpdateManyArgs, Prisma.BatchPayload, false>(
        'Todo',
        `${endpoint}/todo/updateMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TodoUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TodoUpdateManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertTodo(
    options?: Omit<UseMutationOptions<Todo | undefined, unknown, Prisma.TodoUpsertArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = postMutation<Prisma.TodoUpsertArgs, Todo, true>(
        'Todo',
        `${endpoint}/todo/upsert`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TodoUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Todo, Prisma.TodoGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TodoUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Todo, Prisma.TodoGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteTodo(
    options?: Omit<UseMutationOptions<Todo | undefined, unknown, Prisma.TodoDeleteArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = deleteMutation<Prisma.TodoDeleteArgs, Todo, true>(
        'Todo',
        `${endpoint}/todo/delete`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TodoDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Todo, Prisma.TodoGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TodoDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Todo, Prisma.TodoGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyTodo(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.TodoDeleteManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = deleteMutation<Prisma.TodoDeleteManyArgs, Prisma.BatchPayload, false>(
        'Todo',
        `${endpoint}/todo/deleteMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TodoDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TodoDeleteManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateTodo<T extends Prisma.TodoAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoAggregateArgs>,
    options?: UseQueryOptions<Prisma.GetTodoAggregateType<T>>,
) {
    const { endpoint, fetch } = getContext();
    return query<Prisma.GetTodoAggregateType<T>>('Todo', `${endpoint}/todo/aggregate`, args, options, fetch);
}

export function useGroupByTodo<
    T extends Prisma.TodoGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.TodoGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.TodoGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
        ? {
              [P in HavingFields]: P extends ByFields
                  ? never
                  : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends Prisma.True
        ? {}
        : {
              [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
>(
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.TodoGroupByArgs, OrderByArg> & InputErrors>,
    options?: UseQueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.TodoGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.TodoGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = getContext();
    return query<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.TodoGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.TodoGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('Todo', `${endpoint}/todo/groupBy`, args, options, fetch);
}

export function useCountTodo<T extends Prisma.TodoCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TodoCountArgs>,
    options?: UseQueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = getContext();
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType>
            : number
    >('Todo', `${endpoint}/todo/count`, args, options, fetch);
}
