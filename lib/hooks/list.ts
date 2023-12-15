/* eslint-disable */
import type { Prisma, List } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateList(
    options?: Omit<UseMutationOptions<List | undefined, unknown, Prisma.ListCreateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ListCreateArgs, List, true>(
        'List',
        'POST',
        `${endpoint}/list/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ListCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, List, Prisma.ListGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyList(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ListCreateManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ListCreateManyArgs, Prisma.BatchPayload, false>(
        'List',
        'POST',
        `${endpoint}/list/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ListCreateManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyList<T extends Prisma.ListFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ListFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.ListGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('List', `${endpoint}/list/findMany`, args, options, fetch, optimisticUpdate);
}

export function useInfiniteFindManyList<T extends Prisma.ListFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ListFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.ListGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('List', `${endpoint}/list/findMany`, args, options, fetch);
}

export function useFindUniqueList<T extends Prisma.ListFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ListFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.ListGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('List', `${endpoint}/list/findUnique`, args, options, fetch, optimisticUpdate);
}

export function useFindFirstList<T extends Prisma.ListFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ListFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.ListGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('List', `${endpoint}/list/findFirst`, args, options, fetch, optimisticUpdate);
}

export function useUpdateList(
    options?: Omit<UseMutationOptions<List | undefined, unknown, Prisma.ListUpdateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ListUpdateArgs, List, true>(
        'List',
        'PUT',
        `${endpoint}/list/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ListUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, List, Prisma.ListGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyList(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ListUpdateManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ListUpdateManyArgs, Prisma.BatchPayload, false>(
        'List',
        'PUT',
        `${endpoint}/list/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ListUpdateManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertList(
    options?: Omit<UseMutationOptions<List | undefined, unknown, Prisma.ListUpsertArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ListUpsertArgs, List, true>(
        'List',
        'POST',
        `${endpoint}/list/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ListUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, List, Prisma.ListGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteList(
    options?: Omit<UseMutationOptions<List | undefined, unknown, Prisma.ListDeleteArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ListDeleteArgs, List, true>(
        'List',
        'DELETE',
        `${endpoint}/list/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ListDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, List, Prisma.ListGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyList(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.ListDeleteManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.ListDeleteManyArgs, Prisma.BatchPayload, false>(
        'List',
        'DELETE',
        `${endpoint}/list/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.ListDeleteManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateList<T extends Prisma.ListAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ListAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetListAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('List', `${endpoint}/list/aggregate`, args, options, fetch);
}

export function useGroupByList<
    T extends Prisma.ListGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ListGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ListGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.ListGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.ListGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.ListGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.ListGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('List', `${endpoint}/list/groupBy`, args, options, fetch);
}

export function useCountList<T extends Prisma.ListCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ListCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ListCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('List', `${endpoint}/list/count`, args, options, fetch);
}
