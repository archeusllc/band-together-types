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
                    invitationToken?: string | undefined;
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
                            joinedGuild: {
                                guildId: string;
                                name: string;
                                slug: string;
                                guildType: string;
                            } | null;
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
                            weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            showBookedDates: boolean;
                            holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                            taggingEnabled: boolean;
                            tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            useTagsForAI: boolean;
                        } | null;
                        venue: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            venueId: string;
                            banner: string | null;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                            verified: boolean;
                        } | null;
                        owner: {
                            email: string;
                            displayName: string | null;
                            firebaseUid: string | null;
                            userId: string;
                            tag: string | null;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                        } | null;
                        acts: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            actId: string;
                            bio: string | null;
                            banner: string | null;
                        }[];
                    } & {
                        description: string | null;
                        userId: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        guildId: string | null;
                        slug: string | null;
                        venueId: string | null;
                        eventId: string;
                        title: string | null;
                        poster: string | null;
                        startTime: Date | null;
                        duration: number | null;
                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                        confirmed: boolean;
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
                visibility?: "INTERNAL" | "EXTERNAL" | undefined;
                page?: number | undefined;
                limit?: number | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
                ownedByMe?: boolean | undefined;
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
                            weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            showBookedDates: boolean;
                            holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                            taggingEnabled: boolean;
                            tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            useTagsForAI: boolean;
                        } | null;
                        venue: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            venueId: string;
                            banner: string | null;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                            verified: boolean;
                        } | null;
                        owner: {
                            email: string;
                            displayName: string | null;
                            firebaseUid: string | null;
                            userId: string;
                            tag: string | null;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                        } | null;
                        acts: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            actId: string;
                            bio: string | null;
                            banner: string | null;
                        }[];
                    } & {
                        description: string | null;
                        userId: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        guildId: string | null;
                        slug: string | null;
                        venueId: string | null;
                        eventId: string;
                        title: string | null;
                        poster: string | null;
                        startTime: Date | null;
                        duration: number | null;
                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                        confirmed: boolean;
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
                            weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            showBookedDates: boolean;
                            holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                            taggingEnabled: boolean;
                            tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            useTagsForAI: boolean;
                        } | null;
                        venue: ({
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
                                weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                showBookedDates: boolean;
                                holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                taggingEnabled: boolean;
                                tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                useTagsForAI: boolean;
                            } | null;
                        } & {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            venueId: string;
                            banner: string | null;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                            verified: boolean;
                        }) | null;
                        owner: {
                            email: string;
                            displayName: string | null;
                            firebaseUid: string | null;
                            userId: string;
                            tag: string | null;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                        } | null;
                        acts: ({
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
                                weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                showBookedDates: boolean;
                                holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                taggingEnabled: boolean;
                                tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                useTagsForAI: boolean;
                            } | null;
                        } & {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            actId: string;
                            bio: string | null;
                            banner: string | null;
                        })[];
                    } & {
                        description: string | null;
                        userId: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        guildId: string | null;
                        slug: string | null;
                        venueId: string | null;
                        eventId: string;
                        title: string | null;
                        poster: string | null;
                        startTime: Date | null;
                        duration: number | null;
                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                        confirmed: boolean;
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
    events: {
        post: {
            body: {
                description?: string | undefined;
                venueId?: string | undefined;
                poster?: string | undefined;
                startTime?: string | undefined;
                duration?: number | undefined;
                confirmed?: boolean | undefined;
                actIds?: string[] | undefined;
                title: string;
                visibility: "INTERNAL" | "EXTERNAL";
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: ({
                    venue: {
                        name: string;
                        avatar: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        venueId: string;
                        banner: string | null;
                        address: string | null;
                        city: string | null;
                        state: string | null;
                        zipCode: string | null;
                        verified: boolean;
                    } | null;
                    owner: {
                        email: string;
                        displayName: string | null;
                        firebaseUid: string | null;
                        userId: string;
                        tag: string | null;
                        avatar: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                    } | null;
                    acts: ({
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
                            weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            showBookedDates: boolean;
                            holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                            taggingEnabled: boolean;
                            tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            useTagsForAI: boolean;
                        } | null;
                    } & {
                        name: string;
                        avatar: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        actId: string;
                        bio: string | null;
                        banner: string | null;
                    })[];
                } & {
                    description: string | null;
                    userId: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    guildId: string | null;
                    slug: string | null;
                    venueId: string | null;
                    eventId: string;
                    title: string | null;
                    poster: string | null;
                    startTime: Date | null;
                    duration: number | null;
                    visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                    confirmed: boolean;
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
                    visibility?: "INTERNAL" | "EXTERNAL" | undefined;
                    confirmed?: boolean | undefined;
                };
                params: {
                    eventId: string;
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
                            weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            showBookedDates: boolean;
                            holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                            taggingEnabled: boolean;
                            tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            useTagsForAI: boolean;
                        } | null;
                        venue: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            venueId: string;
                            banner: string | null;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                            verified: boolean;
                        } | null;
                        owner: {
                            email: string;
                            displayName: string | null;
                            firebaseUid: string | null;
                            userId: string;
                            tag: string | null;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                        } | null;
                        acts: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            actId: string;
                            bio: string | null;
                            banner: string | null;
                        }[];
                    } & {
                        description: string | null;
                        userId: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        guildId: string | null;
                        slug: string | null;
                        venueId: string | null;
                        eventId: string;
                        title: string | null;
                        poster: string | null;
                        startTime: Date | null;
                        duration: number | null;
                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                        confirmed: boolean;
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
    events: {
        ":eventId": {
            "generate-poster": {
                post: {
                    body: {
                        style?: "vintage" | "modern" | "punk" | "psychedelic" | "minimalist" | undefined;
                        userInput?: string | undefined;
                    };
                    params: {
                        eventId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            message: string;
                            poster: string;
                            event: {
                                venue: {
                                    name: string;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    venueId: string;
                                    banner: string | null;
                                    address: string | null;
                                    city: string | null;
                                    state: string | null;
                                    zipCode: string | null;
                                    verified: boolean;
                                } | null;
                                owner: {
                                    email: string;
                                    displayName: string | null;
                                    firebaseUid: string | null;
                                    userId: string;
                                    tag: string | null;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                } | null;
                                acts: ({
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
                                        weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        showBookedDates: boolean;
                                        holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                        taggingEnabled: boolean;
                                        tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        useTagsForAI: boolean;
                                    } | null;
                                } & {
                                    name: string;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    actId: string;
                                    bio: string | null;
                                    banner: string | null;
                                })[];
                            } & {
                                description: string | null;
                                userId: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                guildId: string | null;
                                slug: string | null;
                                venueId: string | null;
                                eventId: string;
                                title: string | null;
                                poster: string | null;
                                startTime: Date | null;
                                duration: number | null;
                                visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                                confirmed: boolean;
                            };
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
                                weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                showBookedDates: boolean;
                                holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                taggingEnabled: boolean;
                                tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                useTagsForAI: boolean;
                            } | null;
                            venue: ({
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
                                    weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                    showBookedDates: boolean;
                                    holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                    taggingEnabled: boolean;
                                    tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                    useTagsForAI: boolean;
                                } | null;
                            } & {
                                name: string;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                venueId: string;
                                banner: string | null;
                                address: string | null;
                                city: string | null;
                                state: string | null;
                                zipCode: string | null;
                                verified: boolean;
                            }) | null;
                            owner: {
                                email: string;
                                displayName: string | null;
                                firebaseUid: string | null;
                                userId: string;
                                tag: string | null;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                            } | null;
                            acts: ({
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
                                    weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                    showBookedDates: boolean;
                                    holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                    taggingEnabled: boolean;
                                    tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                    useTagsForAI: boolean;
                                } | null;
                            } & {
                                name: string;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                actId: string;
                                bio: string | null;
                                banner: string | null;
                            })[];
                            associationInvitations: ({
                                guild: {
                                    act: {
                                        name: string;
                                        avatar: string | null;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        actId: string;
                                        bio: string | null;
                                        banner: string | null;
                                    } | null;
                                    venue: {
                                        name: string;
                                        avatar: string | null;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        venueId: string;
                                        banner: string | null;
                                        address: string | null;
                                        city: string | null;
                                        state: string | null;
                                        zipCode: string | null;
                                        verified: boolean;
                                    } | null;
                                    club: {
                                        name: string;
                                        description: string | null;
                                        avatar: string | null;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        clubId: string;
                                        banner: string | null;
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
                                    weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                    showBookedDates: boolean;
                                    holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                    taggingEnabled: boolean;
                                    tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                    useTagsForAI: boolean;
                                };
                            } & {
                                status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                                message: string | null;
                                createdAt: Date;
                                guildId: string;
                                eventId: string;
                                invitationId: string;
                                invitedById: string;
                                respondedAt: Date | null;
                                associationType: import("@archeusllc/schema/prisma-client/client").$Enums.EventAssociationType;
                            })[];
                        } & {
                            description: string | null;
                            userId: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            guildId: string | null;
                            slug: string | null;
                            venueId: string | null;
                            eventId: string;
                            title: string | null;
                            poster: string | null;
                            startTime: Date | null;
                            duration: number | null;
                            visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                            confirmed: boolean;
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
    events: {
        ":eventId": {
            invitations: {};
        };
    };
} & {
    events: {
        ":eventId": {
            invitations: {
                get: {
                    body: unknown;
                    params: {
                        eventId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: ({
                            guild: {
                                act: {
                                    name: string;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    actId: string;
                                    bio: string | null;
                                    banner: string | null;
                                } | null;
                                venue: {
                                    name: string;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    venueId: string;
                                    banner: string | null;
                                    address: string | null;
                                    city: string | null;
                                    state: string | null;
                                    zipCode: string | null;
                                    verified: boolean;
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
                                weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                showBookedDates: boolean;
                                holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                taggingEnabled: boolean;
                                tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                useTagsForAI: boolean;
                            };
                            invitedBy: {
                                email: string;
                                displayName: string | null;
                                firebaseUid: string | null;
                                userId: string;
                                tag: string | null;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        } & {
                            status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                            message: string | null;
                            createdAt: Date;
                            guildId: string;
                            eventId: string;
                            invitationId: string;
                            invitedById: string;
                            respondedAt: Date | null;
                            associationType: import("@archeusllc/schema/prisma-client/client").$Enums.EventAssociationType;
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
                        associationType: "ACT" | "VENUE";
                    };
                    params: {
                        eventId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: ({
                            guild: {
                                act: {
                                    name: string;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    actId: string;
                                    bio: string | null;
                                    banner: string | null;
                                } | null;
                                venue: {
                                    name: string;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    venueId: string;
                                    banner: string | null;
                                    address: string | null;
                                    city: string | null;
                                    state: string | null;
                                    zipCode: string | null;
                                    verified: boolean;
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
                                weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                showBookedDates: boolean;
                                holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                taggingEnabled: boolean;
                                tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                useTagsForAI: boolean;
                            };
                            event: {
                                description: string | null;
                                userId: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                guildId: string | null;
                                slug: string | null;
                                venueId: string | null;
                                eventId: string;
                                title: string | null;
                                poster: string | null;
                                startTime: Date | null;
                                duration: number | null;
                                visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                                confirmed: boolean;
                            };
                            invitedBy: {
                                email: string;
                                displayName: string | null;
                                firebaseUid: string | null;
                                userId: string;
                                tag: string | null;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        } & {
                            status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                            message: string | null;
                            createdAt: Date;
                            guildId: string;
                            eventId: string;
                            invitationId: string;
                            invitedById: string;
                            respondedAt: Date | null;
                            associationType: import("@archeusllc/schema/prisma-client/client").$Enums.EventAssociationType;
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
    events: {
        ":eventId": {
            invitations: {
                ":invitationId": {
                    accept: {
                        post: {
                            body: unknown;
                            params: {
                                eventId: string;
                                invitationId: string;
                            };
                            query: unknown;
                            headers: unknown;
                            response: {
                                200: ({
                                    guild: {
                                        act: {
                                            name: string;
                                            avatar: string | null;
                                            createdAt: Date;
                                            updatedAt: Date;
                                            actId: string;
                                            bio: string | null;
                                            banner: string | null;
                                        } | null;
                                        venue: {
                                            name: string;
                                            avatar: string | null;
                                            createdAt: Date;
                                            updatedAt: Date;
                                            venueId: string;
                                            banner: string | null;
                                            address: string | null;
                                            city: string | null;
                                            state: string | null;
                                            zipCode: string | null;
                                            verified: boolean;
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
                                        weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        showBookedDates: boolean;
                                        holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                        taggingEnabled: boolean;
                                        tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        useTagsForAI: boolean;
                                    };
                                    event: {
                                        venue: {
                                            name: string;
                                            avatar: string | null;
                                            createdAt: Date;
                                            updatedAt: Date;
                                            venueId: string;
                                            banner: string | null;
                                            address: string | null;
                                            city: string | null;
                                            state: string | null;
                                            zipCode: string | null;
                                            verified: boolean;
                                        } | null;
                                        acts: {
                                            name: string;
                                            avatar: string | null;
                                            createdAt: Date;
                                            updatedAt: Date;
                                            actId: string;
                                            bio: string | null;
                                            banner: string | null;
                                        }[];
                                    } & {
                                        description: string | null;
                                        userId: string | null;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        guildId: string | null;
                                        slug: string | null;
                                        venueId: string | null;
                                        eventId: string;
                                        title: string | null;
                                        poster: string | null;
                                        startTime: Date | null;
                                        duration: number | null;
                                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                                        confirmed: boolean;
                                    };
                                } & {
                                    status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                                    message: string | null;
                                    createdAt: Date;
                                    guildId: string;
                                    eventId: string;
                                    invitationId: string;
                                    invitedById: string;
                                    respondedAt: Date | null;
                                    associationType: import("@archeusllc/schema/prisma-client/client").$Enums.EventAssociationType;
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
                                eventId: string;
                                invitationId: string;
                            };
                            query: unknown;
                            headers: unknown;
                            response: {
                                200: ({
                                    guild: {
                                        act: {
                                            name: string;
                                            avatar: string | null;
                                            createdAt: Date;
                                            updatedAt: Date;
                                            actId: string;
                                            bio: string | null;
                                            banner: string | null;
                                        } | null;
                                        venue: {
                                            name: string;
                                            avatar: string | null;
                                            createdAt: Date;
                                            updatedAt: Date;
                                            venueId: string;
                                            banner: string | null;
                                            address: string | null;
                                            city: string | null;
                                            state: string | null;
                                            zipCode: string | null;
                                            verified: boolean;
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
                                        weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        showBookedDates: boolean;
                                        holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                        taggingEnabled: boolean;
                                        tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        useTagsForAI: boolean;
                                    };
                                    event: {
                                        description: string | null;
                                        userId: string | null;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        guildId: string | null;
                                        slug: string | null;
                                        venueId: string | null;
                                        eventId: string;
                                        title: string | null;
                                        poster: string | null;
                                        startTime: Date | null;
                                        duration: number | null;
                                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                                        confirmed: boolean;
                                    };
                                } & {
                                    status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                                    message: string | null;
                                    createdAt: Date;
                                    guildId: string;
                                    eventId: string;
                                    invitationId: string;
                                    invitedById: string;
                                    respondedAt: Date | null;
                                    associationType: import("@archeusllc/schema/prisma-client/client").$Enums.EventAssociationType;
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
    };
} & {
    events: {
        ":eventId": {
            availability: {};
        };
    };
} & {
    events: {
        ":eventId": {
            availability: {
                get: {
                    body: unknown;
                    params: {
                        eventId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            availability: ({
                                user: {
                                    displayName: string | null;
                                    userId: string;
                                    avatar: string | null;
                                };
                            } & {
                                status: import("@archeusllc/schema/prisma-client/client").$Enums.AvailabilityStatus;
                                userId: string;
                                createdAt: Date;
                                eventId: string;
                                respondedAt: Date | null;
                                id: string;
                            })[];
                            summary: {
                                accepted: number;
                                declined: number;
                                pending: number;
                                total: number;
                            };
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
        ":eventId": {
            availability: {
                post: {
                    body: {
                        status: "ACCEPTED" | "DECLINED";
                    };
                    params: {
                        eventId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: ({
                            user: {
                                displayName: string | null;
                                userId: string;
                            };
                            event: {
                                owner: {
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
                                description: string | null;
                                userId: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                guildId: string | null;
                                slug: string | null;
                                venueId: string | null;
                                eventId: string;
                                title: string | null;
                                poster: string | null;
                                startTime: Date | null;
                                duration: number | null;
                                visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                                confirmed: boolean;
                            };
                        } & {
                            status: import("@archeusllc/schema/prisma-client/client").$Enums.AvailabilityStatus;
                            userId: string;
                            createdAt: Date;
                            eventId: string;
                            respondedAt: Date | null;
                            id: string;
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
    events: {
        ":eventId": {
            "confirm-status": {};
        };
    };
} & {
    events: {
        ":eventId": {
            "confirm-status": {
                get: {
                    body: unknown;
                    params: {
                        eventId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            canConfirm: boolean;
                            blockers: string[];
                            warnings: string[];
                            memberSummary: {
                                accepted: number;
                                declined: number;
                                pending: number;
                                total: number;
                            };
                            isAlreadyConfirmed: boolean;
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
                            color: string | null;
                            isBanned: boolean;
                        } | null;
                        guild: ({
                            act: {
                                name: string;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                actId: string;
                                bio: string | null;
                                banner: string | null;
                            } | null;
                            venue: {
                                name: string;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                venueId: string;
                                banner: string | null;
                                address: string | null;
                                city: string | null;
                                state: string | null;
                                zipCode: string | null;
                                verified: boolean;
                            } | null;
                            club: {
                                name: string;
                                description: string | null;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                clubId: string;
                                banner: string | null;
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
                            weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            showBookedDates: boolean;
                            holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                            taggingEnabled: boolean;
                            tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            useTagsForAI: boolean;
                        }) | null;
                        event: ({
                            venue: {
                                name: string;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                venueId: string;
                                banner: string | null;
                                address: string | null;
                                city: string | null;
                                state: string | null;
                                zipCode: string | null;
                                verified: boolean;
                            } | null;
                            acts: {
                                name: string;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                actId: string;
                                bio: string | null;
                                banner: string | null;
                            }[];
                        } & {
                            description: string | null;
                            userId: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            guildId: string | null;
                            slug: string | null;
                            venueId: string | null;
                            eventId: string;
                            title: string | null;
                            poster: string | null;
                            startTime: Date | null;
                            duration: number | null;
                            visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                            confirmed: boolean;
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
                        eventId: string | null;
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
                eventId?: string | undefined;
                entityType: "USER" | "TAG" | "GUILD" | "EVENT";
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
                        color: string | null;
                        isBanned: boolean;
                    } | null;
                    guild: ({
                        act: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            actId: string;
                            bio: string | null;
                            banner: string | null;
                        } | null;
                        venue: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            venueId: string;
                            banner: string | null;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                            verified: boolean;
                        } | null;
                        club: {
                            name: string;
                            description: string | null;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            clubId: string;
                            banner: string | null;
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
                        weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                        showBookedDates: boolean;
                        holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                        taggingEnabled: boolean;
                        tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                        useTagsForAI: boolean;
                    }) | null;
                    event: ({
                        venue: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            venueId: string;
                            banner: string | null;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                            verified: boolean;
                        } | null;
                        acts: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            actId: string;
                            bio: string | null;
                            banner: string | null;
                        }[];
                    } & {
                        description: string | null;
                        userId: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        guildId: string | null;
                        slug: string | null;
                        venueId: string | null;
                        eventId: string;
                        title: string | null;
                        poster: string | null;
                        startTime: Date | null;
                        duration: number | null;
                        visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                        confirmed: boolean;
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
                    eventId: string | null;
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
                    tuning?: string | undefined;
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
    acts: {
        ":actId": {
            "event-invitations": {
                get: {
                    body: unknown;
                    params: {
                        actId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: ({
                            event: {
                                venue: ({
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
                                        weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        showBookedDates: boolean;
                                        holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                        taggingEnabled: boolean;
                                        tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        useTagsForAI: boolean;
                                    } | null;
                                } & {
                                    name: string;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    venueId: string;
                                    banner: string | null;
                                    address: string | null;
                                    city: string | null;
                                    state: string | null;
                                    zipCode: string | null;
                                    verified: boolean;
                                }) | null;
                                owner: {
                                    email: string;
                                    displayName: string | null;
                                    firebaseUid: string | null;
                                    userId: string;
                                    tag: string | null;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                } | null;
                                acts: ({
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
                                        weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        showBookedDates: boolean;
                                        holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                        taggingEnabled: boolean;
                                        tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        useTagsForAI: boolean;
                                    } | null;
                                } & {
                                    name: string;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    actId: string;
                                    bio: string | null;
                                    banner: string | null;
                                })[];
                            } & {
                                description: string | null;
                                userId: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                guildId: string | null;
                                slug: string | null;
                                venueId: string | null;
                                eventId: string;
                                title: string | null;
                                poster: string | null;
                                startTime: Date | null;
                                duration: number | null;
                                visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                                confirmed: boolean;
                            };
                            invitedBy: {
                                email: string;
                                displayName: string | null;
                                firebaseUid: string | null;
                                userId: string;
                                tag: string | null;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        } & {
                            status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                            message: string | null;
                            createdAt: Date;
                            guildId: string;
                            eventId: string;
                            invitationId: string;
                            invitedById: string;
                            respondedAt: Date | null;
                            associationType: import("@archeusllc/schema/prisma-client/client").$Enums.EventAssociationType;
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
        };
    };
} & {
    acts: {
        ":actId": {
            "generate-avatar": {
                post: {
                    body: {
                        style?: "bold" | "vintage" | "modern" | "abstract" | "minimal" | undefined;
                        userInput?: string | undefined;
                    };
                    params: {
                        actId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            message: string;
                            avatar: string;
                            guild: import("./types").GuildResponse;
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
    acts: {
        ":actId": {
            "generate-banner": {
                post: {
                    body: {
                        style?: "energetic" | "moody" | "elegant" | "vibrant" | "atmospheric" | undefined;
                        userInput?: string | undefined;
                    };
                    params: {
                        actId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            message: string;
                            banner: string;
                            guild: import("./types").GuildResponse;
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
    clubs: {
        ":clubId": {
            "generate-avatar": {
                post: {
                    body: {
                        style?: "bold" | "vintage" | "modern" | "abstract" | "minimal" | undefined;
                        userInput?: string | undefined;
                    };
                    params: {
                        clubId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            message: string;
                            avatar: string;
                            guild: import("./types").GuildResponse;
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
    clubs: {
        ":clubId": {
            "generate-banner": {
                post: {
                    body: {
                        style?: "energetic" | "moody" | "elegant" | "vibrant" | "atmospheric" | undefined;
                        userInput?: string | undefined;
                    };
                    params: {
                        clubId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            message: string;
                            banner: string;
                            guild: import("./types").GuildResponse;
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
    venues: {
        search: {
            get: {
                body: unknown;
                params: {};
                query: {
                    limit?: number | undefined;
                    q: string;
                };
                headers: unknown;
                response: {
                    200: ({
                        guild: {
                            name: string;
                            guildId: string;
                            slug: string;
                        } | null;
                    } & {
                        name: string;
                        avatar: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        venueId: string;
                        banner: string | null;
                        address: string | null;
                        city: string | null;
                        state: string | null;
                        zipCode: string | null;
                        verified: boolean;
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
    };
} & {
    venues: {
        unofficial: {
            post: {
                body: {
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
                    200: {
                        name: string;
                        avatar: string | null;
                        createdAt: Date;
                        updatedAt: Date;
                        venueId: string;
                        banner: string | null;
                        address: string | null;
                        city: string | null;
                        state: string | null;
                        zipCode: string | null;
                        verified: boolean;
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
                        venue?: undefined;
                        guildId?: undefined;
                        name?: undefined;
                        guildType?: undefined;
                        currentOwner?: undefined;
                        guildMembers?: undefined;
                    } | {
                        venue: {
                            name: string;
                            avatar: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            venueId: string;
                            banner: string | null;
                            address: string | null;
                            city: string | null;
                            state: string | null;
                            zipCode: string | null;
                            verified: boolean;
                        };
                        guildId: null;
                        name: string;
                        guildType: string;
                        currentOwner: null;
                        guildMembers: never[];
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
                        200: ({
                            act: {
                                guild: {
                                    name: string;
                                    guildId: string;
                                    slug: string;
                                } | null;
                            } & {
                                name: string;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                actId: string;
                                bio: string | null;
                                banner: string | null;
                            };
                            venue: {
                                name: string;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                venueId: string;
                                banner: string | null;
                                address: string | null;
                                city: string | null;
                                state: string | null;
                                zipCode: string | null;
                                verified: boolean;
                            };
                        } & {
                            message: string | null;
                            createdAt: Date;
                            actId: string;
                            venueId: string;
                            interestId: string;
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
                            interests: ({
                                act: {
                                    guild: {
                                        name: string;
                                        guildId: string;
                                        slug: string;
                                    } | null;
                                } & {
                                    name: string;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    actId: string;
                                    bio: string | null;
                                    banner: string | null;
                                };
                            } & {
                                message: string | null;
                                createdAt: Date;
                                actId: string;
                                venueId: string;
                                interestId: string;
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
        };
    };
} & {
    venues: {
        ":venueId": {
            interest: {
                delete: {
                    body: unknown;
                    params: {
                        venueId: string;
                    };
                    query: {
                        actGuildId: string;
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
} & {
    venues: {
        ":venueId": {
            "event-invitations": {
                get: {
                    body: unknown;
                    params: {
                        venueId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: ({
                            event: {
                                venue: ({
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
                                        weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        showBookedDates: boolean;
                                        holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                        taggingEnabled: boolean;
                                        tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        useTagsForAI: boolean;
                                    } | null;
                                } & {
                                    name: string;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    venueId: string;
                                    banner: string | null;
                                    address: string | null;
                                    city: string | null;
                                    state: string | null;
                                    zipCode: string | null;
                                    verified: boolean;
                                }) | null;
                                owner: {
                                    email: string;
                                    displayName: string | null;
                                    firebaseUid: string | null;
                                    userId: string;
                                    tag: string | null;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                } | null;
                                acts: ({
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
                                        weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        showBookedDates: boolean;
                                        holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                        taggingEnabled: boolean;
                                        tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                        useTagsForAI: boolean;
                                    } | null;
                                } & {
                                    name: string;
                                    avatar: string | null;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    actId: string;
                                    bio: string | null;
                                    banner: string | null;
                                })[];
                            } & {
                                description: string | null;
                                userId: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                                guildId: string | null;
                                slug: string | null;
                                venueId: string | null;
                                eventId: string;
                                title: string | null;
                                poster: string | null;
                                startTime: Date | null;
                                duration: number | null;
                                visibility: import("@archeusllc/schema/prisma-client/client").$Enums.CalendarEventVisibility;
                                confirmed: boolean;
                            };
                            invitedBy: {
                                email: string;
                                displayName: string | null;
                                firebaseUid: string | null;
                                userId: string;
                                tag: string | null;
                                avatar: string | null;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        } & {
                            status: import("@archeusllc/schema/prisma-client/client").$Enums.GuildInvitationStatus;
                            message: string | null;
                            createdAt: Date;
                            guildId: string;
                            eventId: string;
                            invitationId: string;
                            invitedById: string;
                            respondedAt: Date | null;
                            associationType: import("@archeusllc/schema/prisma-client/client").$Enums.EventAssociationType;
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
        };
    };
} & {
    venues: {
        ":venueId": {
            "generate-avatar": {
                post: {
                    body: {
                        style?: "bold" | "vintage" | "modern" | "abstract" | "minimal" | undefined;
                        userInput?: string | undefined;
                    };
                    params: {
                        venueId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            message: string;
                            avatar: string;
                            guild: import("./types").GuildResponse;
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
    venues: {
        ":venueId": {
            "generate-banner": {
                post: {
                    body: {
                        style?: "energetic" | "moody" | "elegant" | "vibrant" | "atmospheric" | undefined;
                        userInput?: string | undefined;
                    };
                    params: {
                        venueId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            message: string;
                            banner: string;
                            guild: import("./types").GuildResponse;
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
            availability: {
                live: {
                    ":sessionToken": {
                        subscribe: {
                            body: {};
                            params: {
                                guildId: string;
                                sessionToken: string;
                            };
                            query: {};
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
                            guildId: string;
                            startDate: Date;
                            endDate: Date;
                            busyBlocks: any[];
                            memberCount: number;
                            weeklyAvailability: string | number | true | import("@archeusllc/schema/prisma-client/runtime/client").JsonObject | import("@archeusllc/schema/prisma-client/runtime/client").JsonArray;
                            showBookedDates: boolean;
                            holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
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
            availability: {
                settings: {
                    patch: {
                        body: {
                            weeklyAvailability?: {
                                day: string;
                                slot: "DAY" | "NIGHT";
                            }[] | undefined;
                            showBookedDates?: boolean | undefined;
                            holidayMode?: "INCLUDE" | "EXCLUDE" | "NONE" | undefined;
                        };
                        params: {
                            guildId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                guildId: string;
                                weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue;
                                showBookedDates: boolean;
                                holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
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
                                tag: string | null;
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
                                    tag: string | null;
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
                                tag: string | null;
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
                                    tag: string | null;
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
                            invitedBy: {
                                displayName: string | null;
                                userId: string;
                                tag: string | null;
                                avatar: string | null;
                            } | null;
                            invitedUser: {
                                displayName: string | null;
                                userId: string;
                                tag: string | null;
                                avatar: string | null;
                            };
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
                            invitedBy: {
                                displayName: string | null;
                                userId: string;
                                tag: string | null;
                                avatar: string | null;
                            } | null;
                            invitedUser: {
                                displayName: string | null;
                                userId: string;
                                tag: string | null;
                                avatar: string | null;
                            };
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
                                invitedBy: {
                                    displayName: string | null;
                                    userId: string;
                                    tag: string | null;
                                    avatar: string | null;
                                } | null;
                                invitedUser: {
                                    displayName: string | null;
                                    userId: string;
                                    tag: string | null;
                                    avatar: string | null;
                                };
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
    "invitation-links": {
        ":token": {
            get: {
                body: unknown;
                params: {
                    token: string;
                };
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        token: string;
                        status: "GUILD_INACTIVE" | "INACTIVE" | "VALID";
                        guild: {
                            guildId: string;
                            name: string;
                            slug: string;
                            guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                            avatar: string | null;
                        };
                        isMember: boolean;
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
    "invitation-links": {
        ":token": {
            join: {
                post: {
                    body: unknown;
                    params: {
                        token: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            guildId: string;
                            name: string;
                            slug: string;
                            guildType: import("@archeusllc/schema/prisma-client/client").$Enums.GuildType;
                        } | {
                            error: string;
                            guild: any;
                        } | {
                            error: string;
                            guild?: undefined;
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
            "invitation-links": {
                post: {
                    body: Partial<{
                        name?: string | undefined;
                    }> | null;
                    params: {
                        guildId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            name: string | null;
                            createdAt: Date;
                            guildId: string;
                            isActive: boolean;
                            createdById: string;
                            linkId: string;
                            token: string;
                            createdBy: {
                                displayName: string | null;
                                userId: string;
                                tag: string | null;
                                avatar: string | null;
                            };
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
            "invitation-links": {
                get: {
                    body: unknown;
                    params: {
                        guildId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            links: {
                                name: string | null;
                                createdAt: Date;
                                _count: {
                                    usages: number;
                                };
                                guildId: string;
                                isActive: boolean;
                                createdById: string;
                                linkId: string;
                                token: string;
                                createdBy: {
                                    displayName: string | null;
                                    userId: string;
                                    tag: string | null;
                                    avatar: string | null;
                                };
                            }[];
                            error?: undefined;
                        } | {
                            error: string;
                            links?: undefined;
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
            "invitation-links": {
                ":linkId": {
                    patch: {
                        body: {
                            name?: string | undefined;
                            isActive?: boolean | undefined;
                        };
                        params: {
                            guildId: string;
                            linkId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                name: string | null;
                                createdAt: Date;
                                guildId: string;
                                isActive: boolean;
                                createdById: string;
                                linkId: string;
                                token: string;
                                createdBy: {
                                    displayName: string | null;
                                    userId: string;
                                    tag: string | null;
                                    avatar: string | null;
                                };
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
            "invitation-links": {
                ":linkId": {
                    rotate: {
                        post: {
                            body: unknown;
                            params: {
                                guildId: string;
                                linkId: string;
                            };
                            query: unknown;
                            headers: unknown;
                            response: {
                                200: {
                                    name: string | null;
                                    createdAt: Date;
                                    guildId: string;
                                    isActive: boolean;
                                    createdById: string;
                                    linkId: string;
                                    token: string;
                                    createdBy: {
                                        displayName: string | null;
                                        userId: string;
                                        tag: string | null;
                                        avatar: string | null;
                                    };
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
    };
} & {
    guilds: {
        ":guildId": {
            "invitation-links": {
                ":linkId": {
                    delete: {
                        body: unknown;
                        params: {
                            guildId: string;
                            linkId: string;
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
    me: {
        notifications: {
            preferences: {
                patch: {
                    body: {
                        expoPushToken?: string | null | undefined;
                        pushEnabled?: boolean | undefined;
                    };
                    params: {};
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            error: string;
                            success?: undefined;
                        } | {
                            success: boolean;
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
    };
} & {
    admin: {
        broadcast: {
            post: {
                body: {
                    data?: {} | undefined;
                    sendPush?: boolean | undefined;
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
                        pushCount?: undefined;
                    } | {
                        success: boolean;
                        message: string;
                        pushCount: number;
                        error?: undefined;
                    } | {
                        success: boolean;
                        message: string;
                        error?: undefined;
                        pushCount?: undefined;
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
                        weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                        showBookedDates: boolean;
                        holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                        taggingEnabled: boolean;
                        tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                        useTagsForAI: boolean;
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
                                weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                showBookedDates: boolean;
                                holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                                taggingEnabled: boolean;
                                tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                                useTagsForAI: boolean;
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
                            weeklyAvailability: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            showBookedDates: boolean;
                            holidayMode: import("@archeusllc/schema/prisma-client/client").$Enums.HolidayMode;
                            taggingEnabled: boolean;
                            tagsExcludedFromAI: import("@archeusllc/schema/prisma-client/runtime/client").JsonValue | null;
                            useTagsForAI: boolean;
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
    tags: {};
} & {
    tags: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    categories: {
                        category: string;
                        color: string | null;
                        tags: Array<{
                            tagId: string;
                            value: string;
                        }>;
                    }[];
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
    tags: {
        categories: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        categories: {
                            category: string;
                            color: string | null;
                            tagCount: number;
                        }[];
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
    tags: {
        post: {
            body: {
                category?: string | undefined;
                value: string;
            };
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: {
                    value: string;
                    tagId: string;
                    category: string;
                    color: string | null;
                    isBanned: boolean;
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
            tags: {};
        };
    };
} & {
    guilds: {
        ":guildId": {
            tags: {
                get: {
                    body: unknown;
                    params: {
                        guildId: string;
                    };
                    query: {
                        limit?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            tags: import("./types").PublicTag[];
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
        };
    };
} & {
    guilds: {
        ":guildId": {
            tags: {
                mine: {
                    get: {
                        body: unknown;
                        params: {
                            guildId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                tags: import("./types").PrivateTag[];
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
            tags: {
                pending: {
                    get: {
                        body: unknown;
                        params: {
                            guildId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                tags: Array<{
                                    tagId: string;
                                    category: string;
                                    value: string;
                                    color: string | null;
                                    applicationCount: number;
                                    voteScore: number;
                                }>;
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
            tags: {
                blocked: {
                    get: {
                        body: unknown;
                        params: {
                            guildId: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                tags: Array<{
                                    tagId: string;
                                    category: string;
                                    value: string;
                                    color: string | null;
                                }>;
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
            tags: {
                post: {
                    body: {
                        tagId: string;
                    };
                    params: {
                        guildId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: ({
                            tag: {
                                value: string;
                                tagId: string;
                                category: string;
                                color: string | null;
                                isBanned: boolean;
                            };
                        } & {
                            userId: string;
                            createdAt: Date;
                            entityType: import("@archeusllc/schema/prisma-client/client").$Enums.TaggableEntityType;
                            tagId: string;
                            id: string;
                            entityId: string;
                            vote: number;
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
    guilds: {
        ":guildId": {
            tags: {
                ":tagId": {
                    delete: {
                        body: unknown;
                        params: {
                            guildId: string;
                            tagId: string;
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
        };
    };
} & {
    guilds: {
        ":guildId": {
            tags: {
                ":tagId": {
                    downvote: {
                        post: {
                            body: unknown;
                            params: {
                                guildId: string;
                                tagId: string;
                            };
                            query: unknown;
                            headers: unknown;
                            response: {
                                200: {
                                    userId: string;
                                    createdAt: Date;
                                    entityType: import("@archeusllc/schema/prisma-client/client").$Enums.TaggableEntityType;
                                    tagId: string;
                                    id: string;
                                    entityId: string;
                                    vote: number;
                                } | {
                                    removed: boolean;
                                    tagId: string;
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
    };
} & {
    guilds: {
        ":guildId": {
            tags: {
                ":tagId": {
                    official: {
                        post: {
                            body: unknown;
                            params: {
                                guildId: string;
                                tagId: string;
                            };
                            query: unknown;
                            headers: unknown;
                            response: {
                                200: ({
                                    tag: {
                                        value: string;
                                        tagId: string;
                                        category: string;
                                        color: string | null;
                                        isBanned: boolean;
                                    };
                                } & {
                                    createdAt: Date;
                                    entityType: import("@archeusllc/schema/prisma-client/client").$Enums.TaggableEntityType;
                                    tagId: string;
                                    id: string;
                                    entityId: string;
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
    };
} & {
    guilds: {
        ":guildId": {
            tags: {
                ":tagId": {
                    official: {
                        delete: {
                            body: unknown;
                            params: {
                                guildId: string;
                                tagId: string;
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
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            tags: {
                ":tagId": {
                    block: {
                        post: {
                            body: unknown;
                            params: {
                                guildId: string;
                                tagId: string;
                            };
                            query: unknown;
                            headers: unknown;
                            response: {
                                200: ({
                                    tag: {
                                        value: string;
                                        tagId: string;
                                        category: string;
                                        color: string | null;
                                        isBanned: boolean;
                                    };
                                } & {
                                    createdAt: Date;
                                    entityType: import("@archeusllc/schema/prisma-client/client").$Enums.TaggableEntityType;
                                    tagId: string;
                                    id: string;
                                    entityId: string;
                                    blockedById: string;
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
    };
} & {
    guilds: {
        ":guildId": {
            tags: {
                ":tagId": {
                    block: {
                        delete: {
                            body: unknown;
                            params: {
                                guildId: string;
                                tagId: string;
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
            };
        };
    };
} & {
    guilds: {
        ":guildId": {
            "tag-settings": {};
        };
    };
} & {
    guilds: {
        ":guildId": {
            "tag-settings": {
                patch: {
                    body: {
                        taggingEnabled?: boolean | undefined;
                        tagsExcludedFromAI?: string[] | undefined;
                        useTagsForAI?: boolean | undefined;
                    };
                    params: {
                        guildId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            taggingEnabled: boolean;
                            useTagsForAI: boolean;
                            tagsExcludedFromAI: string[];
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
