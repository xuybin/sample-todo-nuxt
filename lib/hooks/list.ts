/* eslint-disable */
import type { Prisma, List } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateList(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(List | undefined), DefaultError, Prisma.ListCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(List | undefined), DefaultError, Prisma.ListCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ListCreateArgs, DefaultError, List, true>('List', 'POST', `${endpoint}/list/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ListCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ListCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyList(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ListCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ListCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ListCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('List', 'POST', `${endpoint}/list/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ListCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ListCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyList<TArgs extends Prisma.ListFindManyArgs, TQueryFnData = Array<Prisma.ListGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ListFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ListFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('List', `${endpoint}/list/findMany`, args, options, fetch);
}

export function useInfiniteFindManyList<TArgs extends Prisma.ListFindManyArgs, TQueryFnData = Array<Prisma.ListGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ListFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ListFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('List', `${endpoint}/list/findMany`, args, options, fetch);
}

export function useFindUniqueList<TArgs extends Prisma.ListFindUniqueArgs, TQueryFnData = Prisma.ListGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ListFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ListFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('List', `${endpoint}/list/findUnique`, args, options, fetch);
}

export function useFindFirstList<TArgs extends Prisma.ListFindFirstArgs, TQueryFnData = Prisma.ListGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ListFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ListFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('List', `${endpoint}/list/findFirst`, args, options, fetch);
}

export function useUpdateList(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(List | undefined), DefaultError, Prisma.ListUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(List | undefined), DefaultError, Prisma.ListUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ListUpdateArgs, DefaultError, List, true>('List', 'PUT', `${endpoint}/list/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ListUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ListUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyList(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ListUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ListUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ListUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('List', 'PUT', `${endpoint}/list/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ListUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ListUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertList(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(List | undefined), DefaultError, Prisma.ListUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(List | undefined), DefaultError, Prisma.ListUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ListUpsertArgs, DefaultError, List, true>('List', 'POST', `${endpoint}/list/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ListUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ListUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteList(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(List | undefined), DefaultError, Prisma.ListDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(List | undefined), DefaultError, Prisma.ListDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ListDeleteArgs, DefaultError, List, true>('List', 'DELETE', `${endpoint}/list/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ListDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ListDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, List, Prisma.ListGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyList(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ListDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ListDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ListDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('List', 'DELETE', `${endpoint}/list/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ListDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ListDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ListDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ListDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateList<TArgs extends Prisma.ListAggregateArgs, TQueryFnData = Prisma.GetListAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ListAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ListAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('List', `${endpoint}/list/aggregate`, args, options, fetch);
}

export function useGroupByList<TArgs extends Prisma.ListGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ListGroupByArgs['orderBy'] } : { orderBy?: Prisma.ListGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.ListGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ListGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ListGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ListGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ListGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ListGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('List', `${endpoint}/list/groupBy`, args, options, fetch);
}

export function useCountList<TArgs extends Prisma.ListCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ListCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.ListCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.ListCountArgs>>, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('List', `${endpoint}/list/count`, args, options, fetch);
}

export function useCheckList<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; spaceId?: string; ownerId?: string; title?: string; private?: boolean }; }, options?: (MaybeRefOrGetter<Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'>> | ComputedRef<Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('List', `${endpoint}/list/check`, args, options, fetch);
}
