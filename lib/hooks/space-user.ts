/* eslint-disable */
import type { Prisma, SpaceUser } from '@prisma/client';
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

export function useCreateSpaceUser(
    options?: Omit<
        UseMutationOptions<SpaceUser | undefined, unknown, Prisma.SpaceUserCreateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = postMutation<Prisma.SpaceUserCreateArgs, SpaceUser, true>(
        'SpaceUser',
        `${endpoint}/spaceUser/create`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SpaceUserCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManySpaceUser(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceUserCreateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = postMutation<Prisma.SpaceUserCreateManyArgs, Prisma.BatchPayload, false>(
        'SpaceUser',
        `${endpoint}/spaceUser/createMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SpaceUserCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>,
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

export function useFindManySpaceUser<T extends Prisma.SpaceUserFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceUserFindManyArgs>,
    options?: UseQueryOptions<Array<Prisma.SpaceUserGetPayload<T>>>,
) {
    const { endpoint, fetch } = getContext();
    return query<Array<Prisma.SpaceUserGetPayload<T>>>(
        'SpaceUser',
        `${endpoint}/spaceUser/findMany`,
        args,
        options,
        fetch,
    );
}

export function useInfiniteFindManySpaceUser<T extends Prisma.SpaceUserFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceUserFindManyArgs>,
    options?: UseInfiniteQueryOptions<Array<Prisma.SpaceUserGetPayload<T>>>,
) {
    const { endpoint, fetch } = getContext();
    return infiniteQuery<Array<Prisma.SpaceUserGetPayload<T>>>(
        'SpaceUser',
        `${endpoint}/spaceUser/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueSpaceUser<T extends Prisma.SpaceUserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueArgs>,
    options?: UseQueryOptions<Prisma.SpaceUserGetPayload<T>>,
) {
    const { endpoint, fetch } = getContext();
    return query<Prisma.SpaceUserGetPayload<T>>('SpaceUser', `${endpoint}/spaceUser/findUnique`, args, options, fetch);
}

export function useFindFirstSpaceUser<T extends Prisma.SpaceUserFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstArgs>,
    options?: UseQueryOptions<Prisma.SpaceUserGetPayload<T>>,
) {
    const { endpoint, fetch } = getContext();
    return query<Prisma.SpaceUserGetPayload<T>>('SpaceUser', `${endpoint}/spaceUser/findFirst`, args, options, fetch);
}

export function useUpdateSpaceUser(
    options?: Omit<
        UseMutationOptions<SpaceUser | undefined, unknown, Prisma.SpaceUserUpdateArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = putMutation<Prisma.SpaceUserUpdateArgs, SpaceUser, true>(
        'SpaceUser',
        `${endpoint}/spaceUser/update`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SpaceUserUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManySpaceUser(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceUserUpdateManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = putMutation<Prisma.SpaceUserUpdateManyArgs, Prisma.BatchPayload, false>(
        'SpaceUser',
        `${endpoint}/spaceUser/updateMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SpaceUserUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>,
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

export function useUpsertSpaceUser(
    options?: Omit<
        UseMutationOptions<SpaceUser | undefined, unknown, Prisma.SpaceUserUpsertArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = postMutation<Prisma.SpaceUserUpsertArgs, SpaceUser, true>(
        'SpaceUser',
        `${endpoint}/spaceUser/upsert`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SpaceUserUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteSpaceUser(
    options?: Omit<
        UseMutationOptions<SpaceUser | undefined, unknown, Prisma.SpaceUserDeleteArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = deleteMutation<Prisma.SpaceUserDeleteArgs, SpaceUser, true>(
        'SpaceUser',
        `${endpoint}/spaceUser/delete`,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SpaceUserDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUserDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManySpaceUser(
    options?: Omit<
        UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceUserDeleteManyArgs, unknown>,
        'mutationFn'
    >,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getContext();
    const _mutation = deleteMutation<Prisma.SpaceUserDeleteManyArgs, Prisma.BatchPayload, false>(
        'SpaceUser',
        `${endpoint}/spaceUser/deleteMany`,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SpaceUserDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>,
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

export function useAggregateSpaceUser<T extends Prisma.SpaceUserAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpaceUserAggregateArgs>,
    options?: UseQueryOptions<Prisma.GetSpaceUserAggregateType<T>>,
) {
    const { endpoint, fetch } = getContext();
    return query<Prisma.GetSpaceUserAggregateType<T>>(
        'SpaceUser',
        `${endpoint}/spaceUser/aggregate`,
        args,
        options,
        fetch,
    );
}

export function useGroupBySpaceUser<
    T extends Prisma.SpaceUserGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.SpaceUserGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.SpaceUserGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.SpaceUserGroupByArgs, OrderByArg> & InputErrors>,
    options?: UseQueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.SpaceUserGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SpaceUserGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SpaceUserGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SpaceUserGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint, fetch } = getContext();
    return query<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.SpaceUserGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SpaceUserGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SpaceUserGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SpaceUserGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('SpaceUser', `${endpoint}/spaceUser/groupBy`, args, options, fetch);
}

export function useCountSpaceUser<T extends Prisma.SpaceUserCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceUserCountArgs>,
    options?: UseQueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = getContext();
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
            : number
    >('SpaceUser', `${endpoint}/spaceUser/count`, args, options, fetch);
}
