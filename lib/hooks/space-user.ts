/* eslint-disable */
import type { Prisma, SpaceUser } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateSpaceUser(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(SpaceUser | undefined), DefaultError, Prisma.SpaceUserCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(SpaceUser | undefined), DefaultError, Prisma.SpaceUserCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceUserCreateArgs, DefaultError, SpaceUser, true>('SpaceUser', 'POST', `${endpoint}/spaceUser/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceUserCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManySpaceUser(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SpaceUserCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SpaceUserCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceUserCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('SpaceUser', 'POST', `${endpoint}/spaceUser/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceUserCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManySpaceUser<TArgs extends Prisma.SpaceUserFindManyArgs, TQueryFnData = Array<Prisma.SpaceUserGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SpaceUserFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SpaceUserFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SpaceUser', `${endpoint}/spaceUser/findMany`, args, options, fetch);
}

export function useInfiniteFindManySpaceUser<TArgs extends Prisma.SpaceUserFindManyArgs, TQueryFnData = Array<Prisma.SpaceUserGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SpaceUserFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SpaceUserFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('SpaceUser', `${endpoint}/spaceUser/findMany`, args, options, fetch);
}

export function useFindUniqueSpaceUser<TArgs extends Prisma.SpaceUserFindUniqueArgs, TQueryFnData = Prisma.SpaceUserGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SpaceUserFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SpaceUserFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SpaceUser', `${endpoint}/spaceUser/findUnique`, args, options, fetch);
}

export function useFindFirstSpaceUser<TArgs extends Prisma.SpaceUserFindFirstArgs, TQueryFnData = Prisma.SpaceUserGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SpaceUserFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SpaceUserFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SpaceUser', `${endpoint}/spaceUser/findFirst`, args, options, fetch);
}

export function useUpdateSpaceUser(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(SpaceUser | undefined), DefaultError, Prisma.SpaceUserUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(SpaceUser | undefined), DefaultError, Prisma.SpaceUserUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceUserUpdateArgs, DefaultError, SpaceUser, true>('SpaceUser', 'PUT', `${endpoint}/spaceUser/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceUserUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManySpaceUser(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SpaceUserUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SpaceUserUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceUserUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('SpaceUser', 'PUT', `${endpoint}/spaceUser/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceUserUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertSpaceUser(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(SpaceUser | undefined), DefaultError, Prisma.SpaceUserUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(SpaceUser | undefined), DefaultError, Prisma.SpaceUserUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceUserUpsertArgs, DefaultError, SpaceUser, true>('SpaceUser', 'POST', `${endpoint}/spaceUser/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceUserUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteSpaceUser(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(SpaceUser | undefined), DefaultError, Prisma.SpaceUserDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(SpaceUser | undefined), DefaultError, Prisma.SpaceUserDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceUserDeleteArgs, DefaultError, SpaceUser, true>('SpaceUser', 'DELETE', `${endpoint}/spaceUser/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceUserDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManySpaceUser(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SpaceUserDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SpaceUserDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.SpaceUserDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('SpaceUser', 'DELETE', `${endpoint}/spaceUser/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceUserDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateSpaceUser<TArgs extends Prisma.SpaceUserAggregateArgs, TQueryFnData = Prisma.GetSpaceUserAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SpaceUserAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SpaceUserAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SpaceUser', `${endpoint}/spaceUser/aggregate`, args, options, fetch);
}

export function useGroupBySpaceUser<TArgs extends Prisma.SpaceUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.SpaceUserGroupByArgs['orderBy'] } : { orderBy?: Prisma.SpaceUserGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.SpaceUserGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.SpaceUserGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.SpaceUserGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.SpaceUserGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.SpaceUserGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.SpaceUserGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SpaceUser', `${endpoint}/spaceUser/groupBy`, args, options, fetch);
}

export function useCountSpaceUser<TArgs extends Prisma.SpaceUserCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.SpaceUserCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SpaceUserCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SpaceUserCountArgs>>, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('SpaceUser', `${endpoint}/spaceUser/count`, args, options, fetch);
}
import type { SpaceUserRole } from '@zenstackhq/runtime/models';

export function useCheckSpaceUser<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; spaceId?: string; userId?: string; role?: SpaceUserRole }; }, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('SpaceUser', `${endpoint}/spaceUser/check`, args, options, fetch);
}
