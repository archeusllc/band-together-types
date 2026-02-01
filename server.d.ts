import { Elysia } from 'elysia';
declare const app: Elysia<"", {
    decorator: {};
    store: {};
    derive: Partial<{
        readonly firebase: {
            readonly uid: string;
            readonly email: string | undefined;
        };
    }>;
    resolve: {};
}, {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
} & {
    typebox: import("@sinclair/typebox").TModule<{}>;
    error: {};
} & {
    typebox: {};
    error: {};
}, {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: import("elysia").ExtractErrorFromHandle<{
        readonly firebase: {
            readonly uid: string;
            readonly email: string | undefined;
        };
    } | undefined>;
} & {
    schema: {};
    macro: {};
    macroFn: {};
    parser: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
}, {
    get: {
        body: unknown;
        params: {};
        query: unknown;
        headers: unknown;
        response: {
            200: {
                error: any;
            } | {
                message: string;
                status: string;
            };
        };
    };
} & {
    ping: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    status: string;
                    version: any;
                };
            };
        };
    };
} & {
    health: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    schemaMissing?: string[] | undefined;
                    status: string;
                    timestamp: string;
                    versions: {
                        api: any;
                        database: string;
                        models: string;
                        schema: string;
                    };
                    checks: {
                        database: string;
                        schema: string;
                    };
                };
            };
        };
    };
} & {
    admin: {
        schema: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: import("@services/schema-validation.service").ValidationResult;
                };
            };
        };
    };
} & {
    admin: {
        migrate: {
            post: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        migration: {
                            success: boolean;
                            message: string;
                        };
                        validation: import("@services/schema-validation.service").ValidationResult;
                    };
                };
            };
        };
    };
} & {
    auth: {
        register: {
            post: {
                body: {
                    displayName?: string | undefined;
                    email: string;
                    firebaseUid: string;
                    idToken: string;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        error: string;
                        message: string;
                        documentation: string;
                        user?: undefined;
                    } | {
                        user: {
                            email: string;
                            displayName: string | null;
                            firebaseUid: string | null;
                            userId: string;
                            tag: string | null;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                        error?: undefined;
                        message?: undefined;
                        documentation?: undefined;
                    } | {
                        error: string;
                        message?: undefined;
                        documentation?: undefined;
                        user?: undefined;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    auth: {
        login: {
            post: {
                body: {
                    firebaseUid: string;
                    idToken: string;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        error: string;
                        message: string;
                        documentation: string;
                        user?: undefined;
                    } | {
                        user: {
                            email: string;
                            displayName: string | null;
                            firebaseUid: string | null;
                            userId: string;
                            tag: string | null;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                        };
                        error?: undefined;
                        message?: undefined;
                        documentation?: undefined;
                    } | {
                        error: string;
                        message?: undefined;
                        documentation?: undefined;
                        user?: undefined;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    auth: {
        logout: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    auth: {
        reset: {
            post: {
                body: {
                    email: string;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    auth: {};
} & {
    auth: {
        me: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        email: string;
                        displayName: string | null;
                        firebaseUid: string | null;
                        userId: string;
                        tag: string | null;
                        avatar: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    auth: {
        me: {
            profile: {
                put: {
                    body: {
                        displayName?: string | undefined;
                        avatar?: string | undefined;
                    };
                    params: {};
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            user: Awaited<ReturnType<(<T extends import("@archeusllc/schema/prisma-client/client").Prisma.UserUpdateArgs>(args: import("@archeusllc/schema/prisma-client/client").Prisma.SelectSubset<T, import("@archeusllc/schema/prisma-client/client").Prisma.UserUpdateArgs<import("@archeusllc/schema/prisma-client/runtime/client").DefaultArgs>>) => import("@archeusllc/schema/prisma-client/client").Prisma.Prisma__UserClient<import("@archeusllc/schema/prisma-client/runtime/client").GetFindResult<import("@archeusllc/schema/prisma-client/client").Prisma.$UserPayload<import("@archeusllc/schema/prisma-client/runtime/client").DefaultArgs>, T, {
                                adapter: import("@prisma/adapter-pg").PrismaPg;
                            }>, never, import("@archeusllc/schema/prisma-client/runtime/client").DefaultArgs, {
                                adapter: import("@prisma/adapter-pg").PrismaPg;
                            }>)>>;
                            tagChanged: boolean;
                            oldTag?: string;
                            newTag?: string;
                        } | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    feed: {};
} & {
    feed: {
        get: {
            body: unknown;
            params: {};
            query: {
                page?: number | undefined;
                limit?: number | undefined;
            };
            headers: unknown;
            response: {
                200: {
                    events: ({
                        guild: {
                            name: string;
                            createdAt: Date;
                            guildId: string;
                            slug: string;
                            guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                            isActive: boolean;
                            createdById: string | null;
                            currentOwnerId: string;
                            actId: string | null;
                            venueId: string | null;
                            clubId: string | null;
                        } | null;
                        venue: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            venueId: string;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                        } | null;
                        acts: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            actId: string;
                            bio: string | null;
                        }[];
                    } & {
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        guildId: string | null;
                        slug: string | null;
                        venueId: string | null;
                        title: string | null;
                        eventId: string;
                        poster: string | null;
                        startTime: Date;
                        duration: number;
                        eventType: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventType;
                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                    })[];
                    total: number;
                    page: number;
                    limit: number;
                } | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            events: {};
        };
    };
} & {
    guilds: {
        ":guildId": {
            events: {
                post: {
                    body: {
                        description?: string | undefined;
                        venueId?: string | undefined;
                        poster?: string | undefined;
                        visibility?: "PUBLIC" | "PRIVATE" | undefined;
                        title: string;
                        startTime: string;
                        duration: number;
                        eventType: "GIG" | "REHEARSAL" | "SHOW_OFFER";
                    };
                    params: {
                        guildId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: ({
                            guild: {
                                name: string;
                                createdAt: Date;
                                guildId: string;
                                slug: string;
                                guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                                isActive: boolean;
                                createdById: string | null;
                                currentOwnerId: string;
                                actId: string | null;
                                venueId: string | null;
                                clubId: string | null;
                            } | null;
                            venue: {
                                name: string;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                venueId: string;
                                address: string | null;
                                city: string | null;
                                state: string | null;
                                zipCode: string | null;
                            } | null;
                            acts: {
                                name: string;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                actId: string;
                                bio: string | null;
                            }[];
                        } & {
                            description: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            guildId: string | null;
                            slug: string | null;
                            venueId: string | null;
                            title: string | null;
                            eventId: string;
                            poster: string | null;
                            startTime: Date;
                            duration: number;
                            eventType: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventType;
                            visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                        }) | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    events: {};
} & {
    events: {
        get: {
            body: unknown;
            params: {};
            query: {
                guildId?: string | undefined;
                actId?: string | undefined;
                venueId?: string | undefined;
                page?: number | undefined;
                limit?: number | undefined;
                eventType?: "GIG" | "REHEARSAL" | "SHOW_OFFER" | undefined;
                visibility?: "PUBLIC" | "PRIVATE" | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            };
            headers: unknown;
            response: {
                200: {
                    events: {
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        guildId: string | null;
                        slug: string | null;
                        venueId: string | null;
                        title: string | null;
                        eventId: string;
                        poster: string | null;
                        startTime: Date;
                        duration: number;
                        eventType: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventType;
                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                    }[];
                    total: number;
                    page: number;
                    limit: number;
                } | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    events: {
        ":eventId": {
            patch: {
                body: {
                    description?: string | undefined;
                    venueId?: string | undefined;
                    title?: string | undefined;
                    poster?: string | undefined;
                    startTime?: string | undefined;
                    duration?: number | undefined;
                    eventType?: "GIG" | "REHEARSAL" | "SHOW_OFFER" | undefined;
                    visibility?: "PUBLIC" | "PRIVATE" | undefined;
                };
                params: {
                    eventId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        guildId: string | null;
                        slug: string | null;
                        venueId: string | null;
                        title: string | null;
                        eventId: string;
                        poster: string | null;
                        startTime: Date;
                        duration: number;
                        eventType: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventType;
                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    events: {
        ":eventId": {
            delete: {
                body: unknown;
                params: {
                    eventId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    events: {
        ":eventId": {
            get: {
                body: unknown;
                params: {
                    eventId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        guildId: string | null;
                        slug: string | null;
                        venueId: string | null;
                        title: string | null;
                        eventId: string;
                        poster: string | null;
                        startTime: Date;
                        duration: number;
                        eventType: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventType;
                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    events: {
        slug: {
            ":slug": {
                get: {
                    body: unknown;
                    params: {
                        slug: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            description: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            guildId: string | null;
                            slug: string | null;
                            venueId: string | null;
                            title: string | null;
                            eventId: string;
                            poster: string | null;
                            startTime: Date;
                            duration: number;
                            eventType: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventType;
                            visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                        } | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    events: {
        post: {
            body: {
                description?: string | undefined;
                venueId?: string | undefined;
                poster?: string | undefined;
                confirmed?: boolean | undefined;
                actIds?: string[] | undefined;
                title: string;
                startTime: string;
                duration: number;
                visibility: "INTERNAL" | "EXTERNAL";
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    description: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    guildId: string | null;
                    slug: string | null;
                    venueId: string | null;
                    title: string | null;
                    eventId: string;
                    poster: string | null;
                    startTime: Date;
                    duration: number;
                    eventType: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventType;
                    visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                } | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    events: {
        ":eventId": {
            invitations: {};
        };
    };
} & {
    events: {
        ":eventId": {
            invitations: {
                post: {
                    body: {
                        message?: string | undefined;
                        guildId: string;
                        role: "ACT" | "VENUE";
                    };
                    params: {
                        eventId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    events: {
        ":eventId": {
            invitations: {
                ":invitationId": {
                    accept: {
                        post: {
                            body: unknown;
                            params: {
                                invitationId: string;
                                eventId: string;
                            };
                            query: unknown;
                            headers: unknown;
                            response: {
                                200: {
                                    error: string;
                                };
                                422: {
                                    type: "validation";
                                    on: string;
                                    summary?: string;
                                    message?: string;
                                    found?: unknown;
                                    property?: string;
                                    expected?: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    events: {
        ":eventId": {
            invitations: {
                ":invitationId": {
                    reject: {
                        post: {
                            body: unknown;
                            params: {
                                invitationId: string;
                                eventId: string;
                            };
                            query: unknown;
                            headers: unknown;
                            response: {
                                200: {
                                    error: string;
                                };
                                422: {
                                    type: "validation";
                                    on: string;
                                    summary?: string;
                                    message?: string;
                                    found?: unknown;
                                    property?: string;
                                    expected?: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    follows: {};
} & {
    follows: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    follows: ({
                        tag: {
                            value: string;
                            tagId: string;
                            category: string;
                        } | null;
                        guild: ({
                            act: {
                                name: string;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                actId: string;
                                bio: string | null;
                            } | null;
                            venue: {
                                name: string;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                venueId: string;
                                address: string | null;
                                city: string | null;
                                state: string | null;
                                zipCode: string | null;
                            } | null;
                            club: {
                                name: string;
                                description: string | null;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                clubId: string;
                            } | null;
                        } & {
                            name: string;
                            createdAt: Date;
                            guildId: string;
                            slug: string;
                            guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                            isActive: boolean;
                            createdById: string | null;
                            currentOwnerId: string;
                            actId: string | null;
                            venueId: string | null;
                            clubId: string | null;
                        }) | null;
                        followedUser: {
                            email: string;
                            displayName: string | null;
                            firebaseUid: string | null;
                            userId: string;
                            tag: string | null;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                        } | null;
                    } & {
                        userId: string;
                        createdAt: Date;
                        guildId: string | null;
                        followId: string;
                        entityType: import("@archeusllc/schema/prisma-client/client").$Enums.FollowEntityType;
                        followedUserId: string | null;
                        tagId: string | null;
                    })[];
                    total: number;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    follows: {
        post: {
            body: {
                guildId?: string | undefined;
                followedUserId?: string | undefined;
                tagId?: string | undefined;
                entityType: "USER" | "TAG" | "GUILD";
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: ({
                    tag: {
                        value: string;
                        tagId: string;
                        category: string;
                    } | null;
                    guild: ({
                        act: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            actId: string;
                            bio: string | null;
                        } | null;
                        venue: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            venueId: string;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                        } | null;
                        club: {
                            name: string;
                            description: string | null;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            clubId: string;
                        } | null;
                    } & {
                        name: string;
                        createdAt: Date;
                        guildId: string;
                        slug: string;
                        guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                        isActive: boolean;
                        createdById: string | null;
                        currentOwnerId: string;
                        actId: string | null;
                        venueId: string | null;
                        clubId: string | null;
                    }) | null;
                    followedUser: {
                        email: string;
                        displayName: string | null;
                        firebaseUid: string | null;
                        userId: string;
                        tag: string | null;
                        avatar: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                    } | null;
                } & {
                    userId: string;
                    createdAt: Date;
                    guildId: string | null;
                    followId: string;
                    entityType: import("@archeusllc/schema/prisma-client/client").$Enums.FollowEntityType;
                    followedUserId: string | null;
                    tagId: string | null;
                }) | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    follows: {
        ":followId": {
            delete: {
                body: unknown;
                params: {
                    followId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    tracks: {
        search: {
            get: {
                body: unknown;
                params: {};
                query: {
                    query?: string | undefined;
                    type?: string | undefined;
                    limit?: number | undefined;
                    offset?: number | undefined;
                    sortBy?: string | undefined;
                    sortOrder?: string | undefined;
                };
                headers: unknown;
                response: {
                    200: {
                        data: import("@archeusllc/schema").TrackSearchResult[];
                        total: number;
                        limit: number;
                        offset: number;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    acts: {};
} & {
    acts: {
        get: {
            body: unknown;
            params: {};
            query: {
                search?: string | undefined;
                page?: number | undefined;
                limit?: number | undefined;
                myGuilds?: boolean | undefined;
            };
            headers: unknown;
            response: {
                200: {
                    guilds: any[];
                    total: number;
                    page: number;
                    limit: number;
                } | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    acts: {
        ":actId": {
            get: {
                body: unknown;
                params: {
                    actId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: import("./types").GuildResponse | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    acts: {
        post: {
            body: {
                avatar?: string | undefined;
                bio?: string | undefined;
                name: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: import("./types").GuildResponse | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    acts: {
        ":actId": {
            patch: {
                body: {
                    name?: string | undefined;
                    avatar?: string | undefined;
                    bio?: string | undefined;
                };
                params: {
                    actId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: import("./types").GuildResponse | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    acts: {
        ":actId": {
            delete: {
                body: unknown;
                params: {
                    actId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    clubs: {};
} & {
    clubs: {
        get: {
            body: unknown;
            params: {};
            query: {
                search?: string | undefined;
                page?: number | undefined;
                limit?: number | undefined;
                myGuilds?: boolean | undefined;
            };
            headers: unknown;
            response: {
                200: {
                    guilds: any[];
                    total: number;
                    page: number;
                    limit: number;
                } | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    clubs: {
        ":clubId": {
            get: {
                body: unknown;
                params: {
                    clubId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: import("./types").GuildResponse | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    clubs: {
        post: {
            body: {
                description?: string | undefined;
                avatar?: string | undefined;
                name: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: import("./types").GuildResponse | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    clubs: {
        ":clubId": {
            patch: {
                body: {
                    name?: string | undefined;
                    description?: string | undefined;
                    avatar?: string | undefined;
                };
                params: {
                    clubId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: import("./types").GuildResponse | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    clubs: {
        ":clubId": {
            delete: {
                body: unknown;
                params: {
                    clubId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    venues: {};
} & {
    venues: {
        get: {
            body: unknown;
            params: {};
            query: {
                search?: string | undefined;
                page?: number | undefined;
                limit?: number | undefined;
                myGuilds?: boolean | undefined;
            };
            headers: unknown;
            response: {
                200: {
                    guilds: any[];
                    total: number;
                    page: number;
                    limit: number;
                } | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    venues: {
        ":venueId": {
            get: {
                body: unknown;
                params: {
                    venueId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: import("./types").GuildResponse | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    venues: {
        post: {
            body: {
                avatar?: string | undefined;
                address?: string | undefined;
                city?: string | undefined;
                state?: string | undefined;
                zipCode?: string | undefined;
                name: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: import("./types").GuildResponse | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    venues: {
        ":venueId": {
            patch: {
                body: {
                    name?: string | undefined;
                    avatar?: string | undefined;
                    address?: string | undefined;
                    city?: string | undefined;
                    state?: string | undefined;
                    zipCode?: string | undefined;
                };
                params: {
                    venueId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: import("./types").GuildResponse | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    venues: {
        ":venueId": {
            delete: {
                body: unknown;
                params: {
                    venueId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    venues: {
        ":venueId": {
            interest: {
                post: {
                    body: {
                        message?: string | undefined;
                        actGuildId: string;
                    };
                    params: {
                        venueId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    venues: {
        ":venueId": {
            interest: {
                get: {
                    body: unknown;
                    params: {
                        venueId: string;
                    };
                    query: {
                        page?: number | undefined;
                        limit?: number | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        slug: {
            ":slug": {
                get: {
                    body: unknown;
                    params: {
                        slug: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: import("./types").GuildResponse | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {};
    };
} & {
    guilds: {
        ":guildId": {
            availability: {
                get: {
                    body: unknown;
                    params: {
                        guildId: string;
                    };
                    query: {
                        startDate?: string | undefined;
                        endDate?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    me: {
        invitations: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        invitations: {
                            id: string;
                            guildId: string;
                            userId: string;
                            invitedBy: string | null;
                            status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                            createdAt: string;
                            guild: {
                                guildId: string;
                                name: string;
                                guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                                avatar: string | null;
                            };
                            inviter: {
                                displayName: string | null;
                                userId: string;
                                avatar: string | null;
                            } | null;
                        }[];
                        error?: undefined;
                    } | {
                        error: string;
                        invitations?: undefined;
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            members: {
                get: {
                    body: unknown;
                    params: {
                        guildId: string;
                    };
                    query: {
                        page?: number | undefined;
                        limit?: number | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            members: {
                                user: {
                                    email: string;
                                    displayName: string | null;
                                    userId: string;
                                    avatar: string | null;
                                };
                                userId: string;
                                guildId: string;
                                id: string;
                                role: import("@archeusllc/schema/prisma-client/client").$Enums.GuildMemberRole;
                                joinedAt: Date;
                            }[];
                            total: number;
                            page: number;
                            limit: number;
                        } | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            members: {
                post: {
                    body: {
                        role?: "OWNER" | "ADMIN" | "MEMBER" | undefined;
                        userId: string;
                    };
                    params: {
                        guildId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            user: {
                                email: string;
                                displayName: string | null;
                                userId: string;
                                avatar: string | null;
                            };
                            userId: string;
                            guildId: string;
                            id: string;
                            role: import("@archeusllc/schema/prisma-client/client").$Enums.GuildMemberRole;
                            joinedAt: Date;
                        } | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            members: {
                ":userId": {
                    delete: {
                        body: unknown;
                        params: {
                            userId: string;
                            guildId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            members: {
                ":userId": {
                    patch: {
                        body: {
                            role: "OWNER" | "ADMIN" | "MEMBER";
                        };
                        params: {
                            userId: string;
                            guildId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                user: {
                                    email: string;
                                    displayName: string | null;
                                    userId: string;
                                    avatar: string | null;
                                };
                                userId: string;
                                guildId: string;
                                id: string;
                                role: import("@archeusllc/schema/prisma-client/client").$Enums.GuildMemberRole;
                                joinedAt: Date;
                            } | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            invitations: {
                post: {
                    body: {
                        userId: string;
                    };
                    params: {
                        guildId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                            createdAt: Date;
                            guildId: string;
                            invitationId: string;
                            invitedUserId: string;
                            invitedById: string | null;
                            respondedAt: Date | null;
                            invitedUser: {
                                displayName: string | null;
                                userId: string;
                                avatar: string | null;
                            };
                            invitedBy: {
                                displayName: string | null;
                                userId: string;
                                avatar: string | null;
                            } | null;
                        } | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            invitations: {
                get: {
                    body: unknown;
                    params: {
                        guildId: string;
                    };
                    query: {
                        status?: "PENDING" | "ACCEPTED" | "REJECTED" | "CANCELLED" | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                            createdAt: Date;
                            guildId: string;
                            invitationId: string;
                            invitedUserId: string;
                            invitedById: string | null;
                            respondedAt: Date | null;
                            invitedUser: {
                                displayName: string | null;
                                userId: string;
                                avatar: string | null;
                            };
                            invitedBy: {
                                displayName: string | null;
                                userId: string;
                                avatar: string | null;
                            } | null;
                        }[] | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            invitations: {
                ":invitationId": {
                    delete: {
                        body: unknown;
                        params: {
                            guildId: string;
                            invitationId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            invitations: {
                ":invitationId": {
                    patch: {
                        body: {
                            status: "ACCEPTED" | "REJECTED";
                        };
                        params: {
                            guildId: string;
                            invitationId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                                createdAt: Date;
                                guildId: string;
                                invitationId: string;
                                invitedUserId: string;
                                invitedById: string | null;
                                respondedAt: Date | null;
                                invitedUser: {
                                    displayName: string | null;
                                    userId: string;
                                    avatar: string | null;
                                };
                                invitedBy: {
                                    displayName: string | null;
                                    userId: string;
                                    avatar: string | null;
                                } | null;
                            } | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            delete: {
                body: unknown;
                params: {
                    guildId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    search: {
        users: {
            get: {
                body: unknown;
                params: {};
                query: {
                    limit?: string | undefined;
                    q?: string | undefined;
                };
                headers: unknown;
                response: {
                    200: {
                        users: {
                            email: string;
                            displayName: string | null;
                            userId: string;
                            tag: string | null;
                            avatar: string | null;
                        }[];
                        error?: undefined;
                    } | {
                        error: string;
                        users?: undefined;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    me: {
        notifications: {
            ws: {
                subscribe: {
                    body: {};
                    params: {};
                    query: {
                        token: string;
                    };
                    headers: {};
                    response: {
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    me: {
        notifications: {
            get: {
                body: unknown;
                params: {};
                query: {
                    status?: "PENDING" | "SENT" | "DELIVERED" | "FAILED" | "READ" | undefined;
                    page?: number | undefined;
                    limit?: number | undefined;
                };
                headers: unknown;
                response: {
                    200: {
                        notifications: {
                            body: string;
                            status: import("@archeusllc/schema/prisma-client/client").$Enums.NotificationStatus;
                            type: import("@archeusllc/schema/prisma-client/client").$Enums.NotificationType;
                            userId: string;
                            createdAt: Date;
                            data: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue;
                            notificationId: string;
                            title: string;
                            readAt: Date | null;
                            relatedType: string | null;
                            relatedId: string | null;
                        }[];
                        total: number;
                        page: number;
                        limit: number;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    me: {
        notifications: {
            "unread-count": {
                get: {
                    body: unknown;
                    params: {};
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            count: number;
                        } | {
                            error: string;
                        };
                    };
                };
            };
        };
    };
} & {
    me: {
        notifications: {
            ":notificationId": {
                patch: {
                    body: unknown;
                    params: {
                        notificationId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            body: string;
                            status: import("@archeusllc/schema/prisma-client/client").$Enums.NotificationStatus;
                            type: import("@archeusllc/schema/prisma-client/client").$Enums.NotificationType;
                            userId: string;
                            createdAt: Date;
                            data: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue;
                            notificationId: string;
                            title: string;
                            readAt: Date | null;
                            relatedType: string | null;
                            relatedId: string | null;
                        } | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    me: {
        notifications: {
            ":notificationId": {
                action: {
                    post: {
                        body: {
                            data?: any;
                            action: string;
                        };
                        params: {
                            notificationId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                body: string;
                                status: import("@archeusllc/schema/prisma-client/client").$Enums.NotificationStatus;
                                type: import("@archeusllc/schema/prisma-client/client").$Enums.NotificationType;
                                userId: string;
                                createdAt: Date;
                                data: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue;
                                notificationId: string;
                                title: string;
                                readAt: Date | null;
                                relatedType: string | null;
                                relatedId: string | null;
                            } | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    me: {
        notifications: {
            ":notificationId": {
                delete: {
                    body: unknown;
                    params: {
                        notificationId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    admin: {
        broadcast: {
            post: {
                body: {
                    data?: {} | undefined;
                    body: string;
                    title: string;
                    passphrase: string;
                };
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        error: string;
                        success?: undefined;
                        message?: undefined;
                    } | {
                        success: boolean;
                        message: string;
                        error?: undefined;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    setlist: {};
} & {
    setlist: {
        post: {
            body: {
                description?: string | undefined;
                guildId?: string | undefined;
                name: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: ({
                    setItems: ({
                        track: {
                            type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                            createdAt: Date;
                            updatedAt: Date;
                            isActive: boolean;
                            title: string;
                            createdBy: string;
                            trackId: string;
                            artist: string;
                            defaultDuration: number | null;
                            defaultTuning: string | null;
                        };
                        section: {
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            setListId: string;
                            position: number;
                            sectionId: string;
                            breakDuration: number | null;
                        } | null;
                    } & {
                        createdAt: Date;
                        updatedAt: Date;
                        setListId: string;
                        trackId: string;
                        setItemId: string;
                        position: number;
                        customTuning: string | null;
                        customNotes: string | null;
                        customDuration: number | null;
                        sectionId: string | null;
                    })[];
                    setSections: {
                        name: string;
                        createdAt: Date;
                        updatedAt: Date;
                        setListId: string;
                        position: number;
                        sectionId: string;
                        breakDuration: number | null;
                    }[];
                } & {
                    name: string;
                    description: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    guildId: string | null;
                    slug: string | null;
                    setListId: string;
                    ownerId: string;
                    isPrivate: boolean;
                    viewToken: string;
                    editToken: string;
                }) | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    setlist: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: ({
                    guild: {
                        name: string;
                        createdAt: Date;
                        guildId: string;
                        slug: string;
                        guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                        isActive: boolean;
                        createdById: string | null;
                        currentOwnerId: string;
                        actId: string | null;
                        venueId: string | null;
                        clubId: string | null;
                    } | null;
                    setItems: ({
                        track: {
                            type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                            createdAt: Date;
                            updatedAt: Date;
                            isActive: boolean;
                            title: string;
                            createdBy: string;
                            trackId: string;
                            artist: string;
                            defaultDuration: number | null;
                            defaultTuning: string | null;
                        };
                    } & {
                        createdAt: Date;
                        updatedAt: Date;
                        setListId: string;
                        trackId: string;
                        setItemId: string;
                        position: number;
                        customTuning: string | null;
                        customNotes: string | null;
                        customDuration: number | null;
                        sectionId: string | null;
                    })[];
                    setSections: {
                        name: string;
                        createdAt: Date;
                        updatedAt: Date;
                        setListId: string;
                        position: number;
                        sectionId: string;
                        breakDuration: number | null;
                    }[];
                } & {
                    name: string;
                    description: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    guildId: string | null;
                    slug: string | null;
                    setListId: string;
                    ownerId: string;
                    isPrivate: boolean;
                    viewToken: string;
                    editToken: string;
                })[] | {
                    error: string;
                };
                422: {
                    type: "validation";
                    on: string;
                    summary?: string;
                    message?: string;
                    found?: unknown;
                    property?: string;
                    expected?: string;
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            patch: {
                body: {
                    name?: string | undefined;
                    description?: string | undefined;
                    guildId?: string | null | undefined;
                };
                params: {
                    setlistId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: ({
                        setItems: ({
                            track: {
                                type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                createdAt: Date;
                                updatedAt: Date;
                                isActive: boolean;
                                title: string;
                                createdBy: string;
                                trackId: string;
                                artist: string;
                                defaultDuration: number | null;
                                defaultTuning: string | null;
                            };
                            section: {
                                name: string;
                                createdAt: Date;
                                updatedAt: Date;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            } | null;
                        } & {
                            createdAt: Date;
                            updatedAt: Date;
                            setListId: string;
                            trackId: string;
                            setItemId: string;
                            position: number;
                            customTuning: string | null;
                            customNotes: string | null;
                            customDuration: number | null;
                            sectionId: string | null;
                        })[];
                        setSections: {
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            setListId: string;
                            position: number;
                            sectionId: string;
                            breakDuration: number | null;
                        }[];
                    } & {
                        name: string;
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        guildId: string | null;
                        slug: string | null;
                        setListId: string;
                        ownerId: string;
                        isPrivate: boolean;
                        viewToken: string;
                        editToken: string;
                    }) | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            delete: {
                body: unknown;
                params: {
                    setlistId: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            duplicate: {
                post: {
                    body: unknown;
                    params: {
                        setlistId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: ({
                            setItems: ({
                                track: {
                                    type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    isActive: boolean;
                                    title: string;
                                    createdBy: string;
                                    trackId: string;
                                    artist: string;
                                    defaultDuration: number | null;
                                    defaultTuning: string | null;
                                };
                                section: {
                                    name: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    setListId: string;
                                    position: number;
                                    sectionId: string;
                                    breakDuration: number | null;
                                } | null;
                            } & {
                                createdAt: Date;
                                updatedAt: Date;
                                setListId: string;
                                trackId: string;
                                setItemId: string;
                                position: number;
                                customTuning: string | null;
                                customNotes: string | null;
                                customDuration: number | null;
                                sectionId: string | null;
                            })[];
                            setSections: {
                                name: string;
                                createdAt: Date;
                                updatedAt: Date;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            }[];
                        } & {
                            name: string;
                            description: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            guildId: string | null;
                            slug: string | null;
                            setListId: string;
                            ownerId: string;
                            isPrivate: boolean;
                            viewToken: string;
                            editToken: string;
                        }) | {
                            error: string;
                        } | null;
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            "regenerate-tokens": {
                post: {
                    body: unknown;
                    params: {
                        setlistId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            setListId: string;
                            viewToken: string;
                            editToken: string;
                        } | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            items: {
                post: {
                    body: {
                        position?: number | undefined;
                        customTuning?: string | undefined;
                        customNotes?: string | undefined;
                        customDuration?: number | undefined;
                        sectionId?: string | undefined;
                        trackId: string;
                    };
                    params: {
                        setlistId: string;
                    };
                    query: {
                        token?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: ({
                            track: {
                                type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                createdAt: Date;
                                updatedAt: Date;
                                isActive: boolean;
                                title: string;
                                createdBy: string;
                                trackId: string;
                                artist: string;
                                defaultDuration: number | null;
                                defaultTuning: string | null;
                            };
                            section: {
                                name: string;
                                createdAt: Date;
                                updatedAt: Date;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            } | null;
                        } & {
                            createdAt: Date;
                            updatedAt: Date;
                            setListId: string;
                            trackId: string;
                            setItemId: string;
                            position: number;
                            customTuning: string | null;
                            customNotes: string | null;
                            customDuration: number | null;
                            sectionId: string | null;
                        }) | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            items: {
                ":setItemId": {
                    patch: {
                        body: {
                            customTuning?: string | undefined;
                            customNotes?: string | undefined;
                            customDuration?: number | undefined;
                            sectionId?: string | null | undefined;
                        };
                        params: {
                            setItemId: string;
                            setlistId: string;
                        };
                        query: {
                            token?: string | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: ({
                                track: {
                                    type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    isActive: boolean;
                                    title: string;
                                    createdBy: string;
                                    trackId: string;
                                    artist: string;
                                    defaultDuration: number | null;
                                    defaultTuning: string | null;
                                };
                                section: {
                                    name: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    setListId: string;
                                    position: number;
                                    sectionId: string;
                                    breakDuration: number | null;
                                } | null;
                            } & {
                                createdAt: Date;
                                updatedAt: Date;
                                setListId: string;
                                trackId: string;
                                setItemId: string;
                                position: number;
                                customTuning: string | null;
                                customNotes: string | null;
                                customDuration: number | null;
                                sectionId: string | null;
                            }) | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            items: {
                ":setItemId": {
                    delete: {
                        body: unknown;
                        params: {
                            setItemId: string;
                            setlistId: string;
                        };
                        query: {
                            token?: string | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                success: boolean;
                            } | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            "reorder-all": {
                post: {
                    body: {
                        elements: {
                            type: "item" | "section";
                            id: string;
                            position: number;
                        }[];
                    };
                    params: {
                        setlistId: string;
                    };
                    query: {
                        token?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: ({
                            setItems: ({
                                track: {
                                    type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    isActive: boolean;
                                    title: string;
                                    createdBy: string;
                                    trackId: string;
                                    artist: string;
                                    defaultDuration: number | null;
                                    defaultTuning: string | null;
                                };
                                section: {
                                    name: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    setListId: string;
                                    position: number;
                                    sectionId: string;
                                    breakDuration: number | null;
                                } | null;
                            } & {
                                createdAt: Date;
                                updatedAt: Date;
                                setListId: string;
                                trackId: string;
                                setItemId: string;
                                position: number;
                                customTuning: string | null;
                                customNotes: string | null;
                                customDuration: number | null;
                                sectionId: string | null;
                            })[];
                            setSections: {
                                name: string;
                                createdAt: Date;
                                updatedAt: Date;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            }[];
                        } & {
                            name: string;
                            description: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            guildId: string | null;
                            slug: string | null;
                            setListId: string;
                            ownerId: string;
                            isPrivate: boolean;
                            viewToken: string;
                            editToken: string;
                        }) | {
                            error: string;
                        } | null;
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            reorder: {
                post: {
                    body: {
                        itemPositions?: {
                            setItemId: string;
                            position: number;
                        }[] | undefined;
                        sectionPositions?: {
                            position: number;
                            sectionId: string;
                        }[] | undefined;
                    };
                    params: {
                        setlistId: string;
                    };
                    query: {
                        token?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: ({
                            setItems: ({
                                track: {
                                    type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    isActive: boolean;
                                    title: string;
                                    createdBy: string;
                                    trackId: string;
                                    artist: string;
                                    defaultDuration: number | null;
                                    defaultTuning: string | null;
                                };
                                section: {
                                    name: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    setListId: string;
                                    position: number;
                                    sectionId: string;
                                    breakDuration: number | null;
                                } | null;
                            } & {
                                createdAt: Date;
                                updatedAt: Date;
                                setListId: string;
                                trackId: string;
                                setItemId: string;
                                position: number;
                                customTuning: string | null;
                                customNotes: string | null;
                                customDuration: number | null;
                                sectionId: string | null;
                            })[];
                            setSections: {
                                name: string;
                                createdAt: Date;
                                updatedAt: Date;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            }[];
                        } & {
                            name: string;
                            description: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            guildId: string | null;
                            slug: string | null;
                            setListId: string;
                            ownerId: string;
                            isPrivate: boolean;
                            viewToken: string;
                            editToken: string;
                        }) | {
                            error: string;
                        } | null;
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            sections: {
                reorder: {
                    post: {
                        body: {
                            sectionPositions: {
                                position: number;
                                sectionId: string;
                            }[];
                        };
                        params: {
                            setlistId: string;
                        };
                        query: {
                            token?: string | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: ({
                                setItems: ({
                                    track: {
                                        type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        isActive: boolean;
                                        title: string;
                                        createdBy: string;
                                        trackId: string;
                                        artist: string;
                                        defaultDuration: number | null;
                                        defaultTuning: string | null;
                                    };
                                    section: {
                                        name: string;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        setListId: string;
                                        position: number;
                                        sectionId: string;
                                        breakDuration: number | null;
                                    } | null;
                                } & {
                                    createdAt: Date;
                                    updatedAt: Date;
                                    setListId: string;
                                    trackId: string;
                                    setItemId: string;
                                    position: number;
                                    customTuning: string | null;
                                    customNotes: string | null;
                                    customDuration: number | null;
                                    sectionId: string | null;
                                })[];
                                setSections: {
                                    name: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    setListId: string;
                                    position: number;
                                    sectionId: string;
                                    breakDuration: number | null;
                                }[];
                            } & {
                                name: string;
                                description: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                guildId: string | null;
                                slug: string | null;
                                setListId: string;
                                ownerId: string;
                                isPrivate: boolean;
                                viewToken: string;
                                editToken: string;
                            }) | {
                                error: string;
                            } | null;
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            sections: {
                post: {
                    body: {
                        position?: number | undefined;
                        name: string;
                    };
                    params: {
                        setlistId: string;
                    };
                    query: {
                        token?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            setListId: string;
                            position: number;
                            sectionId: string;
                            breakDuration: number | null;
                        } | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            sections: {
                ":sectionId": {
                    patch: {
                        body: {
                            name?: string | undefined;
                            breakDuration?: number | null | undefined;
                        };
                        params: {
                            sectionId: string;
                            setlistId: string;
                        };
                        query: {
                            token?: string | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                name: string;
                                createdAt: Date;
                                updatedAt: Date;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            } | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            sections: {
                ":sectionId": {
                    delete: {
                        body: unknown;
                        params: {
                            sectionId: string;
                            setlistId: string;
                        };
                        query: {
                            token?: string | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                success: boolean;
                            } | {
                                error: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        slug: {
            ":slug": {
                get: {
                    body: unknown;
                    params: {
                        slug: string;
                    };
                    query: {
                        token?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: ({
                            guild: {
                                name: string;
                                createdAt: Date;
                                guildId: string;
                                slug: string;
                                guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                                isActive: boolean;
                                createdById: string | null;
                                currentOwnerId: string;
                                actId: string | null;
                                venueId: string | null;
                                clubId: string | null;
                            } | null;
                            owner: {
                                email: string;
                                userId: string;
                            };
                            setItems: ({
                                track: {
                                    type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    isActive: boolean;
                                    title: string;
                                    createdBy: string;
                                    trackId: string;
                                    artist: string;
                                    defaultDuration: number | null;
                                    defaultTuning: string | null;
                                };
                                section: {
                                    name: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    setListId: string;
                                    position: number;
                                    sectionId: string;
                                    breakDuration: number | null;
                                } | null;
                            } & {
                                createdAt: Date;
                                updatedAt: Date;
                                setListId: string;
                                trackId: string;
                                setItemId: string;
                                position: number;
                                customTuning: string | null;
                                customNotes: string | null;
                                customDuration: number | null;
                                sectionId: string | null;
                            })[];
                            setSections: {
                                name: string;
                                createdAt: Date;
                                updatedAt: Date;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            }[];
                        } & {
                            name: string;
                            description: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            guildId: string | null;
                            slug: string | null;
                            setListId: string;
                            ownerId: string;
                            isPrivate: boolean;
                            viewToken: string;
                            editToken: string;
                        }) | {
                            error: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            get: {
                body: unknown;
                params: {
                    setlistId: string;
                };
                query: {
                    token?: string | undefined;
                };
                headers: unknown;
                response: {
                    200: ({
                        guild: {
                            name: string;
                            createdAt: Date;
                            guildId: string;
                            slug: string;
                            guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                            isActive: boolean;
                            createdById: string | null;
                            currentOwnerId: string;
                            actId: string | null;
                            venueId: string | null;
                            clubId: string | null;
                        } | null;
                        owner: {
                            email: string;
                            userId: string;
                        };
                        setItems: ({
                            track: {
                                type: import("@archeusllc/schema/prisma-client/client").$Enums.TrackType;
                                createdAt: Date;
                                updatedAt: Date;
                                isActive: boolean;
                                title: string;
                                createdBy: string;
                                trackId: string;
                                artist: string;
                                defaultDuration: number | null;
                                defaultTuning: string | null;
                            };
                            section: {
                                name: string;
                                createdAt: Date;
                                updatedAt: Date;
                                setListId: string;
                                position: number;
                                sectionId: string;
                                breakDuration: number | null;
                            } | null;
                        } & {
                            createdAt: Date;
                            updatedAt: Date;
                            setListId: string;
                            trackId: string;
                            setItemId: string;
                            position: number;
                            customTuning: string | null;
                            customNotes: string | null;
                            customDuration: number | null;
                            sectionId: string | null;
                        })[];
                        setSections: {
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            setListId: string;
                            position: number;
                            sectionId: string;
                            breakDuration: number | null;
                        }[];
                    } & {
                        name: string;
                        description: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        guildId: string | null;
                        slug: string | null;
                        setListId: string;
                        ownerId: string;
                        isPrivate: boolean;
                        viewToken: string;
                        editToken: string;
                    }) | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    setlist: {
        ":setlistId": {
            ws: {
                subscribe: {
                    body: {};
                    params: {
                        setlistId: string;
                    };
                    query: {
                        userId?: string | undefined;
                        token?: string | undefined;
                        userName?: string | undefined;
                    };
                    headers: {};
                    response: {
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
} & {
    users: {
        ":slug": {
            get: {
                body: unknown;
                params: {
                    slug: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        displayName: string | null;
                        userId: string;
                        tag: string | null;
                        avatar: string | null;
                        createdAt: Date;
                    } | {
                        error: string;
                    };
                    422: {
                        type: "validation";
                        on: string;
                        summary?: string;
                        message?: string;
                        found?: unknown;
                        property?: string;
                        expected?: string;
                    };
                };
            };
        };
    };
} & {
    [x: string]: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: string;
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {
        200: {
            error: any;
        };
    };
} & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
}>;
export type App = typeof app;
export {};
