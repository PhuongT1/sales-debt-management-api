
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Party
 * 
 */
export type Party = $Result.DefaultSelection<Prisma.$PartyPayload>
/**
 * Model Debt
 * 
 */
export type Debt = $Result.DefaultSelection<Prisma.$DebtPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  ACCOUNTANT: 'ACCOUNTANT',
  VIEWER: 'VIEWER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const PartyType: {
  CUSTOMER: 'CUSTOMER',
  SUPPLIER: 'SUPPLIER',
  BOTH: 'BOTH'
};

export type PartyType = (typeof PartyType)[keyof typeof PartyType]


export const DebtType: {
  RECEIVABLE: 'RECEIVABLE',
  PAYABLE: 'PAYABLE'
};

export type DebtType = (typeof DebtType)[keyof typeof DebtType]


export const DebtStatus: {
  OPEN: 'OPEN',
  PARTIAL: 'PARTIAL',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED'
};

export type DebtStatus = (typeof DebtStatus)[keyof typeof DebtStatus]


export const PaymentMethod: {
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER',
  OTHER: 'OTHER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const CollectionStatus: {
  NEW: 'NEW',
  CONTACTED: 'CONTACTED',
  PROMISED: 'PROMISED',
  DISPUTED: 'DISPUTED',
  ESCALATED: 'ESCALATED'
};

export type CollectionStatus = (typeof CollectionStatus)[keyof typeof CollectionStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type PartyType = $Enums.PartyType

export const PartyType: typeof $Enums.PartyType

export type DebtType = $Enums.DebtType

export const DebtType: typeof $Enums.DebtType

export type DebtStatus = $Enums.DebtStatus

export const DebtStatus: typeof $Enums.DebtStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type CollectionStatus = $Enums.CollectionStatus

export const CollectionStatus: typeof $Enums.CollectionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.party`: Exposes CRUD operations for the **Party** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parties
    * const parties = await prisma.party.findMany()
    * ```
    */
  get party(): Prisma.PartyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.debt`: Exposes CRUD operations for the **Debt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Debts
    * const debts = await prisma.debt.findMany()
    * ```
    */
  get debt(): Prisma.DebtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Party: 'Party',
    Debt: 'Debt',
    Payment: 'Payment',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "party" | "debt" | "payment" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Party: {
        payload: Prisma.$PartyPayload<ExtArgs>
        fields: Prisma.PartyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          findFirst: {
            args: Prisma.PartyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          findMany: {
            args: Prisma.PartyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>[]
          }
          create: {
            args: Prisma.PartyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          createMany: {
            args: Prisma.PartyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>[]
          }
          delete: {
            args: Prisma.PartyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          update: {
            args: Prisma.PartyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          deleteMany: {
            args: Prisma.PartyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>[]
          }
          upsert: {
            args: Prisma.PartyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          aggregate: {
            args: Prisma.PartyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParty>
          }
          groupBy: {
            args: Prisma.PartyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartyCountArgs<ExtArgs>
            result: $Utils.Optional<PartyCountAggregateOutputType> | number
          }
        }
      }
      Debt: {
        payload: Prisma.$DebtPayload<ExtArgs>
        fields: Prisma.DebtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DebtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DebtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          findFirst: {
            args: Prisma.DebtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DebtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          findMany: {
            args: Prisma.DebtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>[]
          }
          create: {
            args: Prisma.DebtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          createMany: {
            args: Prisma.DebtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DebtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>[]
          }
          delete: {
            args: Prisma.DebtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          update: {
            args: Prisma.DebtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          deleteMany: {
            args: Prisma.DebtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DebtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DebtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>[]
          }
          upsert: {
            args: Prisma.DebtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtPayload>
          }
          aggregate: {
            args: Prisma.DebtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDebt>
          }
          groupBy: {
            args: Prisma.DebtGroupByArgs<ExtArgs>
            result: $Utils.Optional<DebtGroupByOutputType>[]
          }
          count: {
            args: Prisma.DebtCountArgs<ExtArgs>
            result: $Utils.Optional<DebtCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    party?: PartyOmit
    debt?: DebtOmit
    payment?: PaymentOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    parties: number
    assignedParties: number
    debts: number
    assignedDebts: number
    payments: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parties?: boolean | UserCountOutputTypeCountPartiesArgs
    assignedParties?: boolean | UserCountOutputTypeCountAssignedPartiesArgs
    debts?: boolean | UserCountOutputTypeCountDebtsArgs
    assignedDebts?: boolean | UserCountOutputTypeCountAssignedDebtsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPartiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedPartiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDebtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebtWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedDebtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebtWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type PartyCountOutputType
   */

  export type PartyCountOutputType = {
    debts: number
  }

  export type PartyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    debts?: boolean | PartyCountOutputTypeCountDebtsArgs
  }

  // Custom InputTypes
  /**
   * PartyCountOutputType without action
   */
  export type PartyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCountOutputType
     */
    select?: PartyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartyCountOutputType without action
   */
  export type PartyCountOutputTypeCountDebtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebtWhereInput
  }


  /**
   * Count Type DebtCountOutputType
   */

  export type DebtCountOutputType = {
    payments: number
  }

  export type DebtCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | DebtCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * DebtCountOutputType without action
   */
  export type DebtCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtCountOutputType
     */
    select?: DebtCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DebtCountOutputType without action
   */
  export type DebtCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string | null
    role: $Enums.UserRole
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parties?: boolean | User$partiesArgs<ExtArgs>
    assignedParties?: boolean | User$assignedPartiesArgs<ExtArgs>
    debts?: boolean | User$debtsArgs<ExtArgs>
    assignedDebts?: boolean | User$assignedDebtsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parties?: boolean | User$partiesArgs<ExtArgs>
    assignedParties?: boolean | User$assignedPartiesArgs<ExtArgs>
    debts?: boolean | User$debtsArgs<ExtArgs>
    assignedDebts?: boolean | User$assignedDebtsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      parties: Prisma.$PartyPayload<ExtArgs>[]
      assignedParties: Prisma.$PartyPayload<ExtArgs>[]
      debts: Prisma.$DebtPayload<ExtArgs>[]
      assignedDebts: Prisma.$DebtPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string | null
      role: $Enums.UserRole
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parties<T extends User$partiesArgs<ExtArgs> = {}>(args?: Subset<T, User$partiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedParties<T extends User$assignedPartiesArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedPartiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    debts<T extends User$debtsArgs<ExtArgs> = {}>(args?: Subset<T, User$debtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedDebts<T extends User$assignedDebtsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedDebtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.parties
   */
  export type User$partiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    where?: PartyWhereInput
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    cursor?: PartyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartyScalarFieldEnum | PartyScalarFieldEnum[]
  }

  /**
   * User.assignedParties
   */
  export type User$assignedPartiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    where?: PartyWhereInput
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    cursor?: PartyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartyScalarFieldEnum | PartyScalarFieldEnum[]
  }

  /**
   * User.debts
   */
  export type User$debtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    where?: DebtWhereInput
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    cursor?: DebtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * User.assignedDebts
   */
  export type User$assignedDebtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    where?: DebtWhereInput
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    cursor?: DebtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Party
   */

  export type AggregateParty = {
    _count: PartyCountAggregateOutputType | null
    _avg: PartyAvgAggregateOutputType | null
    _sum: PartySumAggregateOutputType | null
    _min: PartyMinAggregateOutputType | null
    _max: PartyMaxAggregateOutputType | null
  }

  export type PartyAvgAggregateOutputType = {
    creditLimit: Decimal | null
  }

  export type PartySumAggregateOutputType = {
    creditLimit: Decimal | null
  }

  export type PartyMinAggregateOutputType = {
    id: string | null
    type: $Enums.PartyType | null
    code: string | null
    name: string | null
    phone: string | null
    email: string | null
    taxCode: string | null
    address: string | null
    note: string | null
    creditLimit: Decimal | null
    isActive: boolean | null
    createdById: string | null
    assignedToId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartyMaxAggregateOutputType = {
    id: string | null
    type: $Enums.PartyType | null
    code: string | null
    name: string | null
    phone: string | null
    email: string | null
    taxCode: string | null
    address: string | null
    note: string | null
    creditLimit: Decimal | null
    isActive: boolean | null
    createdById: string | null
    assignedToId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartyCountAggregateOutputType = {
    id: number
    type: number
    code: number
    name: number
    phone: number
    email: number
    taxCode: number
    address: number
    note: number
    creditLimit: number
    isActive: number
    createdById: number
    assignedToId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartyAvgAggregateInputType = {
    creditLimit?: true
  }

  export type PartySumAggregateInputType = {
    creditLimit?: true
  }

  export type PartyMinAggregateInputType = {
    id?: true
    type?: true
    code?: true
    name?: true
    phone?: true
    email?: true
    taxCode?: true
    address?: true
    note?: true
    creditLimit?: true
    isActive?: true
    createdById?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartyMaxAggregateInputType = {
    id?: true
    type?: true
    code?: true
    name?: true
    phone?: true
    email?: true
    taxCode?: true
    address?: true
    note?: true
    creditLimit?: true
    isActive?: true
    createdById?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartyCountAggregateInputType = {
    id?: true
    type?: true
    code?: true
    name?: true
    phone?: true
    email?: true
    taxCode?: true
    address?: true
    note?: true
    creditLimit?: true
    isActive?: true
    createdById?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Party to aggregate.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parties
    **/
    _count?: true | PartyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartyMaxAggregateInputType
  }

  export type GetPartyAggregateType<T extends PartyAggregateArgs> = {
        [P in keyof T & keyof AggregateParty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParty[P]>
      : GetScalarType<T[P], AggregateParty[P]>
  }




  export type PartyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyWhereInput
    orderBy?: PartyOrderByWithAggregationInput | PartyOrderByWithAggregationInput[]
    by: PartyScalarFieldEnum[] | PartyScalarFieldEnum
    having?: PartyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartyCountAggregateInputType | true
    _avg?: PartyAvgAggregateInputType
    _sum?: PartySumAggregateInputType
    _min?: PartyMinAggregateInputType
    _max?: PartyMaxAggregateInputType
  }

  export type PartyGroupByOutputType = {
    id: string
    type: $Enums.PartyType
    code: string | null
    name: string
    phone: string | null
    email: string | null
    taxCode: string | null
    address: string | null
    note: string | null
    creditLimit: Decimal | null
    isActive: boolean
    createdById: string | null
    assignedToId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PartyCountAggregateOutputType | null
    _avg: PartyAvgAggregateOutputType | null
    _sum: PartySumAggregateOutputType | null
    _min: PartyMinAggregateOutputType | null
    _max: PartyMaxAggregateOutputType | null
  }

  type GetPartyGroupByPayload<T extends PartyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartyGroupByOutputType[P]>
            : GetScalarType<T[P], PartyGroupByOutputType[P]>
        }
      >
    >


  export type PartySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    code?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    taxCode?: boolean
    address?: boolean
    note?: boolean
    creditLimit?: boolean
    isActive?: boolean
    createdById?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Party$createdByArgs<ExtArgs>
    assignedTo?: boolean | Party$assignedToArgs<ExtArgs>
    debts?: boolean | Party$debtsArgs<ExtArgs>
    _count?: boolean | PartyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["party"]>

  export type PartySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    code?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    taxCode?: boolean
    address?: boolean
    note?: boolean
    creditLimit?: boolean
    isActive?: boolean
    createdById?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Party$createdByArgs<ExtArgs>
    assignedTo?: boolean | Party$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["party"]>

  export type PartySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    code?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    taxCode?: boolean
    address?: boolean
    note?: boolean
    creditLimit?: boolean
    isActive?: boolean
    createdById?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | Party$createdByArgs<ExtArgs>
    assignedTo?: boolean | Party$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["party"]>

  export type PartySelectScalar = {
    id?: boolean
    type?: boolean
    code?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    taxCode?: boolean
    address?: boolean
    note?: boolean
    creditLimit?: boolean
    isActive?: boolean
    createdById?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "code" | "name" | "phone" | "email" | "taxCode" | "address" | "note" | "creditLimit" | "isActive" | "createdById" | "assignedToId" | "createdAt" | "updatedAt", ExtArgs["result"]["party"]>
  export type PartyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Party$createdByArgs<ExtArgs>
    assignedTo?: boolean | Party$assignedToArgs<ExtArgs>
    debts?: boolean | Party$debtsArgs<ExtArgs>
    _count?: boolean | PartyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Party$createdByArgs<ExtArgs>
    assignedTo?: boolean | Party$assignedToArgs<ExtArgs>
  }
  export type PartyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Party$createdByArgs<ExtArgs>
    assignedTo?: boolean | Party$assignedToArgs<ExtArgs>
  }

  export type $PartyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Party"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      debts: Prisma.$DebtPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.PartyType
      code: string | null
      name: string
      phone: string | null
      email: string | null
      taxCode: string | null
      address: string | null
      note: string | null
      creditLimit: Prisma.Decimal | null
      isActive: boolean
      createdById: string | null
      assignedToId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["party"]>
    composites: {}
  }

  type PartyGetPayload<S extends boolean | null | undefined | PartyDefaultArgs> = $Result.GetResult<Prisma.$PartyPayload, S>

  type PartyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartyCountAggregateInputType | true
    }

  export interface PartyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Party'], meta: { name: 'Party' } }
    /**
     * Find zero or one Party that matches the filter.
     * @param {PartyFindUniqueArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartyFindUniqueArgs>(args: SelectSubset<T, PartyFindUniqueArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Party that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartyFindUniqueOrThrowArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartyFindUniqueOrThrowArgs>(args: SelectSubset<T, PartyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Party that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyFindFirstArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartyFindFirstArgs>(args?: SelectSubset<T, PartyFindFirstArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Party that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyFindFirstOrThrowArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartyFindFirstOrThrowArgs>(args?: SelectSubset<T, PartyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parties
     * const parties = await prisma.party.findMany()
     * 
     * // Get first 10 Parties
     * const parties = await prisma.party.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partyWithIdOnly = await prisma.party.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartyFindManyArgs>(args?: SelectSubset<T, PartyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Party.
     * @param {PartyCreateArgs} args - Arguments to create a Party.
     * @example
     * // Create one Party
     * const Party = await prisma.party.create({
     *   data: {
     *     // ... data to create a Party
     *   }
     * })
     * 
     */
    create<T extends PartyCreateArgs>(args: SelectSubset<T, PartyCreateArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parties.
     * @param {PartyCreateManyArgs} args - Arguments to create many Parties.
     * @example
     * // Create many Parties
     * const party = await prisma.party.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartyCreateManyArgs>(args?: SelectSubset<T, PartyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parties and returns the data saved in the database.
     * @param {PartyCreateManyAndReturnArgs} args - Arguments to create many Parties.
     * @example
     * // Create many Parties
     * const party = await prisma.party.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parties and only return the `id`
     * const partyWithIdOnly = await prisma.party.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartyCreateManyAndReturnArgs>(args?: SelectSubset<T, PartyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Party.
     * @param {PartyDeleteArgs} args - Arguments to delete one Party.
     * @example
     * // Delete one Party
     * const Party = await prisma.party.delete({
     *   where: {
     *     // ... filter to delete one Party
     *   }
     * })
     * 
     */
    delete<T extends PartyDeleteArgs>(args: SelectSubset<T, PartyDeleteArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Party.
     * @param {PartyUpdateArgs} args - Arguments to update one Party.
     * @example
     * // Update one Party
     * const party = await prisma.party.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartyUpdateArgs>(args: SelectSubset<T, PartyUpdateArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parties.
     * @param {PartyDeleteManyArgs} args - Arguments to filter Parties to delete.
     * @example
     * // Delete a few Parties
     * const { count } = await prisma.party.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartyDeleteManyArgs>(args?: SelectSubset<T, PartyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parties
     * const party = await prisma.party.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartyUpdateManyArgs>(args: SelectSubset<T, PartyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parties and returns the data updated in the database.
     * @param {PartyUpdateManyAndReturnArgs} args - Arguments to update many Parties.
     * @example
     * // Update many Parties
     * const party = await prisma.party.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parties and only return the `id`
     * const partyWithIdOnly = await prisma.party.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartyUpdateManyAndReturnArgs>(args: SelectSubset<T, PartyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Party.
     * @param {PartyUpsertArgs} args - Arguments to update or create a Party.
     * @example
     * // Update or create a Party
     * const party = await prisma.party.upsert({
     *   create: {
     *     // ... data to create a Party
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Party we want to update
     *   }
     * })
     */
    upsert<T extends PartyUpsertArgs>(args: SelectSubset<T, PartyUpsertArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyCountArgs} args - Arguments to filter Parties to count.
     * @example
     * // Count the number of Parties
     * const count = await prisma.party.count({
     *   where: {
     *     // ... the filter for the Parties we want to count
     *   }
     * })
    **/
    count<T extends PartyCountArgs>(
      args?: Subset<T, PartyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Party.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartyAggregateArgs>(args: Subset<T, PartyAggregateArgs>): Prisma.PrismaPromise<GetPartyAggregateType<T>>

    /**
     * Group by Party.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartyGroupByArgs['orderBy'] }
        : { orderBy?: PartyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Party model
   */
  readonly fields: PartyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Party.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Party$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Party$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends Party$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Party$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    debts<T extends Party$debtsArgs<ExtArgs> = {}>(args?: Subset<T, Party$debtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Party model
   */
  interface PartyFieldRefs {
    readonly id: FieldRef<"Party", 'String'>
    readonly type: FieldRef<"Party", 'PartyType'>
    readonly code: FieldRef<"Party", 'String'>
    readonly name: FieldRef<"Party", 'String'>
    readonly phone: FieldRef<"Party", 'String'>
    readonly email: FieldRef<"Party", 'String'>
    readonly taxCode: FieldRef<"Party", 'String'>
    readonly address: FieldRef<"Party", 'String'>
    readonly note: FieldRef<"Party", 'String'>
    readonly creditLimit: FieldRef<"Party", 'Decimal'>
    readonly isActive: FieldRef<"Party", 'Boolean'>
    readonly createdById: FieldRef<"Party", 'String'>
    readonly assignedToId: FieldRef<"Party", 'String'>
    readonly createdAt: FieldRef<"Party", 'DateTime'>
    readonly updatedAt: FieldRef<"Party", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Party findUnique
   */
  export type PartyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Party to fetch.
     */
    where: PartyWhereUniqueInput
  }

  /**
   * Party findUniqueOrThrow
   */
  export type PartyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Party to fetch.
     */
    where: PartyWhereUniqueInput
  }

  /**
   * Party findFirst
   */
  export type PartyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Party to fetch.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parties.
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: PartyScalarFieldEnum | PartyScalarFieldEnum[]
  }

  /**
   * Party findFirstOrThrow
   */
  export type PartyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Party to fetch.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parties.
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: PartyScalarFieldEnum | PartyScalarFieldEnum[]
  }

  /**
   * Party findMany
   */
  export type PartyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Parties to fetch.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parties.
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: PartyScalarFieldEnum | PartyScalarFieldEnum[]
  }

  /**
   * Party create
   */
  export type PartyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * The data needed to create a Party.
     */
    data: XOR<PartyCreateInput, PartyUncheckedCreateInput>
  }

  /**
   * Party createMany
   */
  export type PartyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parties.
     */
    data: PartyCreateManyInput | PartyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Party createManyAndReturn
   */
  export type PartyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * The data used to create many Parties.
     */
    data: PartyCreateManyInput | PartyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Party update
   */
  export type PartyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * The data needed to update a Party.
     */
    data: XOR<PartyUpdateInput, PartyUncheckedUpdateInput>
    /**
     * Choose, which Party to update.
     */
    where: PartyWhereUniqueInput
  }

  /**
   * Party updateMany
   */
  export type PartyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parties.
     */
    data: XOR<PartyUpdateManyMutationInput, PartyUncheckedUpdateManyInput>
    /**
     * Filter which Parties to update
     */
    where?: PartyWhereInput
    /**
     * Limit how many Parties to update.
     */
    limit?: number
  }

  /**
   * Party updateManyAndReturn
   */
  export type PartyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * The data used to update Parties.
     */
    data: XOR<PartyUpdateManyMutationInput, PartyUncheckedUpdateManyInput>
    /**
     * Filter which Parties to update
     */
    where?: PartyWhereInput
    /**
     * Limit how many Parties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Party upsert
   */
  export type PartyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * The filter to search for the Party to update in case it exists.
     */
    where: PartyWhereUniqueInput
    /**
     * In case the Party found by the `where` argument doesn't exist, create a new Party with this data.
     */
    create: XOR<PartyCreateInput, PartyUncheckedCreateInput>
    /**
     * In case the Party was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartyUpdateInput, PartyUncheckedUpdateInput>
  }

  /**
   * Party delete
   */
  export type PartyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter which Party to delete.
     */
    where: PartyWhereUniqueInput
  }

  /**
   * Party deleteMany
   */
  export type PartyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parties to delete
     */
    where?: PartyWhereInput
    /**
     * Limit how many Parties to delete.
     */
    limit?: number
  }

  /**
   * Party.createdBy
   */
  export type Party$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Party.assignedTo
   */
  export type Party$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Party.debts
   */
  export type Party$debtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    where?: DebtWhereInput
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    cursor?: DebtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * Party without action
   */
  export type PartyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
  }


  /**
   * Model Debt
   */

  export type AggregateDebt = {
    _count: DebtCountAggregateOutputType | null
    _avg: DebtAvgAggregateOutputType | null
    _sum: DebtSumAggregateOutputType | null
    _min: DebtMinAggregateOutputType | null
    _max: DebtMaxAggregateOutputType | null
  }

  export type DebtAvgAggregateOutputType = {
    originalAmount: Decimal | null
    paidAmount: Decimal | null
  }

  export type DebtSumAggregateOutputType = {
    originalAmount: Decimal | null
    paidAmount: Decimal | null
  }

  export type DebtMinAggregateOutputType = {
    id: string | null
    code: string | null
    type: $Enums.DebtType | null
    partyId: string | null
    assignedToId: string | null
    title: string | null
    invoiceNo: string | null
    orderNo: string | null
    contractNo: string | null
    poNo: string | null
    description: string | null
    originalAmount: Decimal | null
    paidAmount: Decimal | null
    currency: string | null
    issueDate: Date | null
    dueDate: Date | null
    status: $Enums.DebtStatus | null
    collectionStatus: $Enums.CollectionStatus | null
    nextFollowUpAt: Date | null
    followUpNote: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebtMaxAggregateOutputType = {
    id: string | null
    code: string | null
    type: $Enums.DebtType | null
    partyId: string | null
    assignedToId: string | null
    title: string | null
    invoiceNo: string | null
    orderNo: string | null
    contractNo: string | null
    poNo: string | null
    description: string | null
    originalAmount: Decimal | null
    paidAmount: Decimal | null
    currency: string | null
    issueDate: Date | null
    dueDate: Date | null
    status: $Enums.DebtStatus | null
    collectionStatus: $Enums.CollectionStatus | null
    nextFollowUpAt: Date | null
    followUpNote: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebtCountAggregateOutputType = {
    id: number
    code: number
    type: number
    partyId: number
    assignedToId: number
    title: number
    invoiceNo: number
    orderNo: number
    contractNo: number
    poNo: number
    description: number
    originalAmount: number
    paidAmount: number
    currency: number
    issueDate: number
    dueDate: number
    status: number
    collectionStatus: number
    nextFollowUpAt: number
    followUpNote: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DebtAvgAggregateInputType = {
    originalAmount?: true
    paidAmount?: true
  }

  export type DebtSumAggregateInputType = {
    originalAmount?: true
    paidAmount?: true
  }

  export type DebtMinAggregateInputType = {
    id?: true
    code?: true
    type?: true
    partyId?: true
    assignedToId?: true
    title?: true
    invoiceNo?: true
    orderNo?: true
    contractNo?: true
    poNo?: true
    description?: true
    originalAmount?: true
    paidAmount?: true
    currency?: true
    issueDate?: true
    dueDate?: true
    status?: true
    collectionStatus?: true
    nextFollowUpAt?: true
    followUpNote?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebtMaxAggregateInputType = {
    id?: true
    code?: true
    type?: true
    partyId?: true
    assignedToId?: true
    title?: true
    invoiceNo?: true
    orderNo?: true
    contractNo?: true
    poNo?: true
    description?: true
    originalAmount?: true
    paidAmount?: true
    currency?: true
    issueDate?: true
    dueDate?: true
    status?: true
    collectionStatus?: true
    nextFollowUpAt?: true
    followUpNote?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebtCountAggregateInputType = {
    id?: true
    code?: true
    type?: true
    partyId?: true
    assignedToId?: true
    title?: true
    invoiceNo?: true
    orderNo?: true
    contractNo?: true
    poNo?: true
    description?: true
    originalAmount?: true
    paidAmount?: true
    currency?: true
    issueDate?: true
    dueDate?: true
    status?: true
    collectionStatus?: true
    nextFollowUpAt?: true
    followUpNote?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DebtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Debt to aggregate.
     */
    where?: DebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debts to fetch.
     */
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Debts
    **/
    _count?: true | DebtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DebtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DebtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DebtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DebtMaxAggregateInputType
  }

  export type GetDebtAggregateType<T extends DebtAggregateArgs> = {
        [P in keyof T & keyof AggregateDebt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDebt[P]>
      : GetScalarType<T[P], AggregateDebt[P]>
  }




  export type DebtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebtWhereInput
    orderBy?: DebtOrderByWithAggregationInput | DebtOrderByWithAggregationInput[]
    by: DebtScalarFieldEnum[] | DebtScalarFieldEnum
    having?: DebtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DebtCountAggregateInputType | true
    _avg?: DebtAvgAggregateInputType
    _sum?: DebtSumAggregateInputType
    _min?: DebtMinAggregateInputType
    _max?: DebtMaxAggregateInputType
  }

  export type DebtGroupByOutputType = {
    id: string
    code: string
    type: $Enums.DebtType
    partyId: string
    assignedToId: string | null
    title: string
    invoiceNo: string | null
    orderNo: string | null
    contractNo: string | null
    poNo: string | null
    description: string | null
    originalAmount: Decimal
    paidAmount: Decimal
    currency: string
    issueDate: Date
    dueDate: Date
    status: $Enums.DebtStatus
    collectionStatus: $Enums.CollectionStatus
    nextFollowUpAt: Date | null
    followUpNote: string | null
    createdById: string | null
    createdAt: Date
    updatedAt: Date
    _count: DebtCountAggregateOutputType | null
    _avg: DebtAvgAggregateOutputType | null
    _sum: DebtSumAggregateOutputType | null
    _min: DebtMinAggregateOutputType | null
    _max: DebtMaxAggregateOutputType | null
  }

  type GetDebtGroupByPayload<T extends DebtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DebtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DebtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DebtGroupByOutputType[P]>
            : GetScalarType<T[P], DebtGroupByOutputType[P]>
        }
      >
    >


  export type DebtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    partyId?: boolean
    assignedToId?: boolean
    title?: boolean
    invoiceNo?: boolean
    orderNo?: boolean
    contractNo?: boolean
    poNo?: boolean
    description?: boolean
    originalAmount?: boolean
    paidAmount?: boolean
    currency?: boolean
    issueDate?: boolean
    dueDate?: boolean
    status?: boolean
    collectionStatus?: boolean
    nextFollowUpAt?: boolean
    followUpNote?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    party?: boolean | PartyDefaultArgs<ExtArgs>
    assignedTo?: boolean | Debt$assignedToArgs<ExtArgs>
    createdBy?: boolean | Debt$createdByArgs<ExtArgs>
    payments?: boolean | Debt$paymentsArgs<ExtArgs>
    _count?: boolean | DebtCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debt"]>

  export type DebtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    partyId?: boolean
    assignedToId?: boolean
    title?: boolean
    invoiceNo?: boolean
    orderNo?: boolean
    contractNo?: boolean
    poNo?: boolean
    description?: boolean
    originalAmount?: boolean
    paidAmount?: boolean
    currency?: boolean
    issueDate?: boolean
    dueDate?: boolean
    status?: boolean
    collectionStatus?: boolean
    nextFollowUpAt?: boolean
    followUpNote?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    party?: boolean | PartyDefaultArgs<ExtArgs>
    assignedTo?: boolean | Debt$assignedToArgs<ExtArgs>
    createdBy?: boolean | Debt$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["debt"]>

  export type DebtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    partyId?: boolean
    assignedToId?: boolean
    title?: boolean
    invoiceNo?: boolean
    orderNo?: boolean
    contractNo?: boolean
    poNo?: boolean
    description?: boolean
    originalAmount?: boolean
    paidAmount?: boolean
    currency?: boolean
    issueDate?: boolean
    dueDate?: boolean
    status?: boolean
    collectionStatus?: boolean
    nextFollowUpAt?: boolean
    followUpNote?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    party?: boolean | PartyDefaultArgs<ExtArgs>
    assignedTo?: boolean | Debt$assignedToArgs<ExtArgs>
    createdBy?: boolean | Debt$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["debt"]>

  export type DebtSelectScalar = {
    id?: boolean
    code?: boolean
    type?: boolean
    partyId?: boolean
    assignedToId?: boolean
    title?: boolean
    invoiceNo?: boolean
    orderNo?: boolean
    contractNo?: boolean
    poNo?: boolean
    description?: boolean
    originalAmount?: boolean
    paidAmount?: boolean
    currency?: boolean
    issueDate?: boolean
    dueDate?: boolean
    status?: boolean
    collectionStatus?: boolean
    nextFollowUpAt?: boolean
    followUpNote?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DebtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "type" | "partyId" | "assignedToId" | "title" | "invoiceNo" | "orderNo" | "contractNo" | "poNo" | "description" | "originalAmount" | "paidAmount" | "currency" | "issueDate" | "dueDate" | "status" | "collectionStatus" | "nextFollowUpAt" | "followUpNote" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["debt"]>
  export type DebtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    party?: boolean | PartyDefaultArgs<ExtArgs>
    assignedTo?: boolean | Debt$assignedToArgs<ExtArgs>
    createdBy?: boolean | Debt$createdByArgs<ExtArgs>
    payments?: boolean | Debt$paymentsArgs<ExtArgs>
    _count?: boolean | DebtCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DebtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    party?: boolean | PartyDefaultArgs<ExtArgs>
    assignedTo?: boolean | Debt$assignedToArgs<ExtArgs>
    createdBy?: boolean | Debt$createdByArgs<ExtArgs>
  }
  export type DebtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    party?: boolean | PartyDefaultArgs<ExtArgs>
    assignedTo?: boolean | Debt$assignedToArgs<ExtArgs>
    createdBy?: boolean | Debt$createdByArgs<ExtArgs>
  }

  export type $DebtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Debt"
    objects: {
      party: Prisma.$PartyPayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      type: $Enums.DebtType
      partyId: string
      assignedToId: string | null
      title: string
      invoiceNo: string | null
      orderNo: string | null
      contractNo: string | null
      poNo: string | null
      description: string | null
      originalAmount: Prisma.Decimal
      paidAmount: Prisma.Decimal
      currency: string
      issueDate: Date
      dueDate: Date
      status: $Enums.DebtStatus
      collectionStatus: $Enums.CollectionStatus
      nextFollowUpAt: Date | null
      followUpNote: string | null
      createdById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["debt"]>
    composites: {}
  }

  type DebtGetPayload<S extends boolean | null | undefined | DebtDefaultArgs> = $Result.GetResult<Prisma.$DebtPayload, S>

  type DebtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DebtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DebtCountAggregateInputType | true
    }

  export interface DebtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Debt'], meta: { name: 'Debt' } }
    /**
     * Find zero or one Debt that matches the filter.
     * @param {DebtFindUniqueArgs} args - Arguments to find a Debt
     * @example
     * // Get one Debt
     * const debt = await prisma.debt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DebtFindUniqueArgs>(args: SelectSubset<T, DebtFindUniqueArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Debt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DebtFindUniqueOrThrowArgs} args - Arguments to find a Debt
     * @example
     * // Get one Debt
     * const debt = await prisma.debt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DebtFindUniqueOrThrowArgs>(args: SelectSubset<T, DebtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Debt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtFindFirstArgs} args - Arguments to find a Debt
     * @example
     * // Get one Debt
     * const debt = await prisma.debt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DebtFindFirstArgs>(args?: SelectSubset<T, DebtFindFirstArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Debt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtFindFirstOrThrowArgs} args - Arguments to find a Debt
     * @example
     * // Get one Debt
     * const debt = await prisma.debt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DebtFindFirstOrThrowArgs>(args?: SelectSubset<T, DebtFindFirstOrThrowArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Debts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Debts
     * const debts = await prisma.debt.findMany()
     * 
     * // Get first 10 Debts
     * const debts = await prisma.debt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const debtWithIdOnly = await prisma.debt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DebtFindManyArgs>(args?: SelectSubset<T, DebtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Debt.
     * @param {DebtCreateArgs} args - Arguments to create a Debt.
     * @example
     * // Create one Debt
     * const Debt = await prisma.debt.create({
     *   data: {
     *     // ... data to create a Debt
     *   }
     * })
     * 
     */
    create<T extends DebtCreateArgs>(args: SelectSubset<T, DebtCreateArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Debts.
     * @param {DebtCreateManyArgs} args - Arguments to create many Debts.
     * @example
     * // Create many Debts
     * const debt = await prisma.debt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DebtCreateManyArgs>(args?: SelectSubset<T, DebtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Debts and returns the data saved in the database.
     * @param {DebtCreateManyAndReturnArgs} args - Arguments to create many Debts.
     * @example
     * // Create many Debts
     * const debt = await prisma.debt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Debts and only return the `id`
     * const debtWithIdOnly = await prisma.debt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DebtCreateManyAndReturnArgs>(args?: SelectSubset<T, DebtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Debt.
     * @param {DebtDeleteArgs} args - Arguments to delete one Debt.
     * @example
     * // Delete one Debt
     * const Debt = await prisma.debt.delete({
     *   where: {
     *     // ... filter to delete one Debt
     *   }
     * })
     * 
     */
    delete<T extends DebtDeleteArgs>(args: SelectSubset<T, DebtDeleteArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Debt.
     * @param {DebtUpdateArgs} args - Arguments to update one Debt.
     * @example
     * // Update one Debt
     * const debt = await prisma.debt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DebtUpdateArgs>(args: SelectSubset<T, DebtUpdateArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Debts.
     * @param {DebtDeleteManyArgs} args - Arguments to filter Debts to delete.
     * @example
     * // Delete a few Debts
     * const { count } = await prisma.debt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DebtDeleteManyArgs>(args?: SelectSubset<T, DebtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Debts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Debts
     * const debt = await prisma.debt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DebtUpdateManyArgs>(args: SelectSubset<T, DebtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Debts and returns the data updated in the database.
     * @param {DebtUpdateManyAndReturnArgs} args - Arguments to update many Debts.
     * @example
     * // Update many Debts
     * const debt = await prisma.debt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Debts and only return the `id`
     * const debtWithIdOnly = await prisma.debt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DebtUpdateManyAndReturnArgs>(args: SelectSubset<T, DebtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Debt.
     * @param {DebtUpsertArgs} args - Arguments to update or create a Debt.
     * @example
     * // Update or create a Debt
     * const debt = await prisma.debt.upsert({
     *   create: {
     *     // ... data to create a Debt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Debt we want to update
     *   }
     * })
     */
    upsert<T extends DebtUpsertArgs>(args: SelectSubset<T, DebtUpsertArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Debts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtCountArgs} args - Arguments to filter Debts to count.
     * @example
     * // Count the number of Debts
     * const count = await prisma.debt.count({
     *   where: {
     *     // ... the filter for the Debts we want to count
     *   }
     * })
    **/
    count<T extends DebtCountArgs>(
      args?: Subset<T, DebtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DebtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Debt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DebtAggregateArgs>(args: Subset<T, DebtAggregateArgs>): Prisma.PrismaPromise<GetDebtAggregateType<T>>

    /**
     * Group by Debt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DebtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DebtGroupByArgs['orderBy'] }
        : { orderBy?: DebtGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DebtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDebtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Debt model
   */
  readonly fields: DebtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Debt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DebtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    party<T extends PartyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartyDefaultArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends Debt$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Debt$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends Debt$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Debt$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends Debt$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Debt$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Debt model
   */
  interface DebtFieldRefs {
    readonly id: FieldRef<"Debt", 'String'>
    readonly code: FieldRef<"Debt", 'String'>
    readonly type: FieldRef<"Debt", 'DebtType'>
    readonly partyId: FieldRef<"Debt", 'String'>
    readonly assignedToId: FieldRef<"Debt", 'String'>
    readonly title: FieldRef<"Debt", 'String'>
    readonly invoiceNo: FieldRef<"Debt", 'String'>
    readonly orderNo: FieldRef<"Debt", 'String'>
    readonly contractNo: FieldRef<"Debt", 'String'>
    readonly poNo: FieldRef<"Debt", 'String'>
    readonly description: FieldRef<"Debt", 'String'>
    readonly originalAmount: FieldRef<"Debt", 'Decimal'>
    readonly paidAmount: FieldRef<"Debt", 'Decimal'>
    readonly currency: FieldRef<"Debt", 'String'>
    readonly issueDate: FieldRef<"Debt", 'DateTime'>
    readonly dueDate: FieldRef<"Debt", 'DateTime'>
    readonly status: FieldRef<"Debt", 'DebtStatus'>
    readonly collectionStatus: FieldRef<"Debt", 'CollectionStatus'>
    readonly nextFollowUpAt: FieldRef<"Debt", 'DateTime'>
    readonly followUpNote: FieldRef<"Debt", 'String'>
    readonly createdById: FieldRef<"Debt", 'String'>
    readonly createdAt: FieldRef<"Debt", 'DateTime'>
    readonly updatedAt: FieldRef<"Debt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Debt findUnique
   */
  export type DebtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debt to fetch.
     */
    where: DebtWhereUniqueInput
  }

  /**
   * Debt findUniqueOrThrow
   */
  export type DebtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debt to fetch.
     */
    where: DebtWhereUniqueInput
  }

  /**
   * Debt findFirst
   */
  export type DebtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debt to fetch.
     */
    where?: DebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debts to fetch.
     */
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Debts.
     */
    cursor?: DebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Debts.
     */
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * Debt findFirstOrThrow
   */
  export type DebtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debt to fetch.
     */
    where?: DebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debts to fetch.
     */
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Debts.
     */
    cursor?: DebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Debts.
     */
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * Debt findMany
   */
  export type DebtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter, which Debts to fetch.
     */
    where?: DebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debts to fetch.
     */
    orderBy?: DebtOrderByWithRelationInput | DebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Debts.
     */
    cursor?: DebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Debts.
     */
    distinct?: DebtScalarFieldEnum | DebtScalarFieldEnum[]
  }

  /**
   * Debt create
   */
  export type DebtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * The data needed to create a Debt.
     */
    data: XOR<DebtCreateInput, DebtUncheckedCreateInput>
  }

  /**
   * Debt createMany
   */
  export type DebtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Debts.
     */
    data: DebtCreateManyInput | DebtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Debt createManyAndReturn
   */
  export type DebtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * The data used to create many Debts.
     */
    data: DebtCreateManyInput | DebtCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Debt update
   */
  export type DebtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * The data needed to update a Debt.
     */
    data: XOR<DebtUpdateInput, DebtUncheckedUpdateInput>
    /**
     * Choose, which Debt to update.
     */
    where: DebtWhereUniqueInput
  }

  /**
   * Debt updateMany
   */
  export type DebtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Debts.
     */
    data: XOR<DebtUpdateManyMutationInput, DebtUncheckedUpdateManyInput>
    /**
     * Filter which Debts to update
     */
    where?: DebtWhereInput
    /**
     * Limit how many Debts to update.
     */
    limit?: number
  }

  /**
   * Debt updateManyAndReturn
   */
  export type DebtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * The data used to update Debts.
     */
    data: XOR<DebtUpdateManyMutationInput, DebtUncheckedUpdateManyInput>
    /**
     * Filter which Debts to update
     */
    where?: DebtWhereInput
    /**
     * Limit how many Debts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Debt upsert
   */
  export type DebtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * The filter to search for the Debt to update in case it exists.
     */
    where: DebtWhereUniqueInput
    /**
     * In case the Debt found by the `where` argument doesn't exist, create a new Debt with this data.
     */
    create: XOR<DebtCreateInput, DebtUncheckedCreateInput>
    /**
     * In case the Debt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DebtUpdateInput, DebtUncheckedUpdateInput>
  }

  /**
   * Debt delete
   */
  export type DebtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
    /**
     * Filter which Debt to delete.
     */
    where: DebtWhereUniqueInput
  }

  /**
   * Debt deleteMany
   */
  export type DebtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Debts to delete
     */
    where?: DebtWhereInput
    /**
     * Limit how many Debts to delete.
     */
    limit?: number
  }

  /**
   * Debt.assignedTo
   */
  export type Debt$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Debt.createdBy
   */
  export type Debt$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Debt.payments
   */
  export type Debt$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Debt without action
   */
  export type DebtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debt
     */
    select?: DebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debt
     */
    omit?: DebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    debtId: string | null
    amount: Decimal | null
    paidAt: Date | null
    method: $Enums.PaymentMethod | null
    referenceNo: string | null
    note: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    debtId: string | null
    amount: Decimal | null
    paidAt: Date | null
    method: $Enums.PaymentMethod | null
    referenceNo: string | null
    note: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    debtId: number
    amount: number
    paidAt: number
    method: number
    referenceNo: number
    note: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    debtId?: true
    amount?: true
    paidAt?: true
    method?: true
    referenceNo?: true
    note?: true
    createdById?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    debtId?: true
    amount?: true
    paidAt?: true
    method?: true
    referenceNo?: true
    note?: true
    createdById?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    debtId?: true
    amount?: true
    paidAt?: true
    method?: true
    referenceNo?: true
    note?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    debtId: string
    amount: Decimal
    paidAt: Date
    method: $Enums.PaymentMethod
    referenceNo: string | null
    note: string | null
    createdById: string | null
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    debtId?: boolean
    amount?: boolean
    paidAt?: boolean
    method?: boolean
    referenceNo?: boolean
    note?: boolean
    createdById?: boolean
    createdAt?: boolean
    debt?: boolean | DebtDefaultArgs<ExtArgs>
    createdBy?: boolean | Payment$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    debtId?: boolean
    amount?: boolean
    paidAt?: boolean
    method?: boolean
    referenceNo?: boolean
    note?: boolean
    createdById?: boolean
    createdAt?: boolean
    debt?: boolean | DebtDefaultArgs<ExtArgs>
    createdBy?: boolean | Payment$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    debtId?: boolean
    amount?: boolean
    paidAt?: boolean
    method?: boolean
    referenceNo?: boolean
    note?: boolean
    createdById?: boolean
    createdAt?: boolean
    debt?: boolean | DebtDefaultArgs<ExtArgs>
    createdBy?: boolean | Payment$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    debtId?: boolean
    amount?: boolean
    paidAt?: boolean
    method?: boolean
    referenceNo?: boolean
    note?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "debtId" | "amount" | "paidAt" | "method" | "referenceNo" | "note" | "createdById" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    debt?: boolean | DebtDefaultArgs<ExtArgs>
    createdBy?: boolean | Payment$createdByArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    debt?: boolean | DebtDefaultArgs<ExtArgs>
    createdBy?: boolean | Payment$createdByArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    debt?: boolean | DebtDefaultArgs<ExtArgs>
    createdBy?: boolean | Payment$createdByArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      debt: Prisma.$DebtPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      debtId: string
      amount: Prisma.Decimal
      paidAt: Date
      method: $Enums.PaymentMethod
      referenceNo: string | null
      note: string | null
      createdById: string | null
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    debt<T extends DebtDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DebtDefaultArgs<ExtArgs>>): Prisma__DebtClient<$Result.GetResult<Prisma.$DebtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends Payment$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Payment$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly debtId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly referenceNo: FieldRef<"Payment", 'String'>
    readonly note: FieldRef<"Payment", 'String'>
    readonly createdById: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.createdBy
   */
  export type Payment$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    actorId: string | null
    entityType: string | null
    entityId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    actorId: string | null
    entityType: string | null
    entityId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actorId: number
    entityType: number
    entityId: number
    action: number
    before: number
    after: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    actorId?: true
    entityType?: true
    entityId?: true
    action?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actorId?: true
    entityType?: true
    entityId?: true
    action?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actorId?: true
    entityType?: true
    entityId?: true
    action?: true
    before?: true
    after?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    actorId: string | null
    entityType: string
    entityId: string
    action: string
    before: JsonValue | null
    after: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    actorId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorId" | "entityType" | "entityId" | "action" | "before" | "after" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorId: string | null
      entityType: string
      entityId: string
      action: string
      before: Prisma.JsonValue | null
      after: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends AuditLog$actorArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly before: FieldRef<"AuditLog", 'Json'>
    readonly after: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.actor
   */
  export type AuditLog$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PartyScalarFieldEnum: {
    id: 'id',
    type: 'type',
    code: 'code',
    name: 'name',
    phone: 'phone',
    email: 'email',
    taxCode: 'taxCode',
    address: 'address',
    note: 'note',
    creditLimit: 'creditLimit',
    isActive: 'isActive',
    createdById: 'createdById',
    assignedToId: 'assignedToId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartyScalarFieldEnum = (typeof PartyScalarFieldEnum)[keyof typeof PartyScalarFieldEnum]


  export const DebtScalarFieldEnum: {
    id: 'id',
    code: 'code',
    type: 'type',
    partyId: 'partyId',
    assignedToId: 'assignedToId',
    title: 'title',
    invoiceNo: 'invoiceNo',
    orderNo: 'orderNo',
    contractNo: 'contractNo',
    poNo: 'poNo',
    description: 'description',
    originalAmount: 'originalAmount',
    paidAmount: 'paidAmount',
    currency: 'currency',
    issueDate: 'issueDate',
    dueDate: 'dueDate',
    status: 'status',
    collectionStatus: 'collectionStatus',
    nextFollowUpAt: 'nextFollowUpAt',
    followUpNote: 'followUpNote',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DebtScalarFieldEnum = (typeof DebtScalarFieldEnum)[keyof typeof DebtScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    debtId: 'debtId',
    amount: 'amount',
    paidAt: 'paidAt',
    method: 'method',
    referenceNo: 'referenceNo',
    note: 'note',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actorId: 'actorId',
    entityType: 'entityType',
    entityId: 'entityId',
    action: 'action',
    before: 'before',
    after: 'after',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PartyType'
   */
  export type EnumPartyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartyType'>
    


  /**
   * Reference to a field of type 'PartyType[]'
   */
  export type ListEnumPartyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartyType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DebtType'
   */
  export type EnumDebtTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DebtType'>
    


  /**
   * Reference to a field of type 'DebtType[]'
   */
  export type ListEnumDebtTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DebtType[]'>
    


  /**
   * Reference to a field of type 'DebtStatus'
   */
  export type EnumDebtStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DebtStatus'>
    


  /**
   * Reference to a field of type 'DebtStatus[]'
   */
  export type ListEnumDebtStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DebtStatus[]'>
    


  /**
   * Reference to a field of type 'CollectionStatus'
   */
  export type EnumCollectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollectionStatus'>
    


  /**
   * Reference to a field of type 'CollectionStatus[]'
   */
  export type ListEnumCollectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollectionStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parties?: PartyListRelationFilter
    assignedParties?: PartyListRelationFilter
    debts?: DebtListRelationFilter
    assignedDebts?: DebtListRelationFilter
    payments?: PaymentListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parties?: PartyOrderByRelationAggregateInput
    assignedParties?: PartyOrderByRelationAggregateInput
    debts?: DebtOrderByRelationAggregateInput
    assignedDebts?: DebtOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parties?: PartyListRelationFilter
    assignedParties?: PartyListRelationFilter
    debts?: DebtListRelationFilter
    assignedDebts?: DebtListRelationFilter
    payments?: PaymentListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PartyWhereInput = {
    AND?: PartyWhereInput | PartyWhereInput[]
    OR?: PartyWhereInput[]
    NOT?: PartyWhereInput | PartyWhereInput[]
    id?: StringFilter<"Party"> | string
    type?: EnumPartyTypeFilter<"Party"> | $Enums.PartyType
    code?: StringNullableFilter<"Party"> | string | null
    name?: StringFilter<"Party"> | string
    phone?: StringNullableFilter<"Party"> | string | null
    email?: StringNullableFilter<"Party"> | string | null
    taxCode?: StringNullableFilter<"Party"> | string | null
    address?: StringNullableFilter<"Party"> | string | null
    note?: StringNullableFilter<"Party"> | string | null
    creditLimit?: DecimalNullableFilter<"Party"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"Party"> | boolean
    createdById?: StringNullableFilter<"Party"> | string | null
    assignedToId?: StringNullableFilter<"Party"> | string | null
    createdAt?: DateTimeFilter<"Party"> | Date | string
    updatedAt?: DateTimeFilter<"Party"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    debts?: DebtListRelationFilter
  }

  export type PartyOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    taxCode?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    creditLimit?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdById?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    debts?: DebtOrderByRelationAggregateInput
  }

  export type PartyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PartyWhereInput | PartyWhereInput[]
    OR?: PartyWhereInput[]
    NOT?: PartyWhereInput | PartyWhereInput[]
    type?: EnumPartyTypeFilter<"Party"> | $Enums.PartyType
    name?: StringFilter<"Party"> | string
    phone?: StringNullableFilter<"Party"> | string | null
    email?: StringNullableFilter<"Party"> | string | null
    taxCode?: StringNullableFilter<"Party"> | string | null
    address?: StringNullableFilter<"Party"> | string | null
    note?: StringNullableFilter<"Party"> | string | null
    creditLimit?: DecimalNullableFilter<"Party"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"Party"> | boolean
    createdById?: StringNullableFilter<"Party"> | string | null
    assignedToId?: StringNullableFilter<"Party"> | string | null
    createdAt?: DateTimeFilter<"Party"> | Date | string
    updatedAt?: DateTimeFilter<"Party"> | Date | string
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    debts?: DebtListRelationFilter
  }, "id" | "code">

  export type PartyOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    taxCode?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    creditLimit?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdById?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartyCountOrderByAggregateInput
    _avg?: PartyAvgOrderByAggregateInput
    _max?: PartyMaxOrderByAggregateInput
    _min?: PartyMinOrderByAggregateInput
    _sum?: PartySumOrderByAggregateInput
  }

  export type PartyScalarWhereWithAggregatesInput = {
    AND?: PartyScalarWhereWithAggregatesInput | PartyScalarWhereWithAggregatesInput[]
    OR?: PartyScalarWhereWithAggregatesInput[]
    NOT?: PartyScalarWhereWithAggregatesInput | PartyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Party"> | string
    type?: EnumPartyTypeWithAggregatesFilter<"Party"> | $Enums.PartyType
    code?: StringNullableWithAggregatesFilter<"Party"> | string | null
    name?: StringWithAggregatesFilter<"Party"> | string
    phone?: StringNullableWithAggregatesFilter<"Party"> | string | null
    email?: StringNullableWithAggregatesFilter<"Party"> | string | null
    taxCode?: StringNullableWithAggregatesFilter<"Party"> | string | null
    address?: StringNullableWithAggregatesFilter<"Party"> | string | null
    note?: StringNullableWithAggregatesFilter<"Party"> | string | null
    creditLimit?: DecimalNullableWithAggregatesFilter<"Party"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolWithAggregatesFilter<"Party"> | boolean
    createdById?: StringNullableWithAggregatesFilter<"Party"> | string | null
    assignedToId?: StringNullableWithAggregatesFilter<"Party"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Party"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Party"> | Date | string
  }

  export type DebtWhereInput = {
    AND?: DebtWhereInput | DebtWhereInput[]
    OR?: DebtWhereInput[]
    NOT?: DebtWhereInput | DebtWhereInput[]
    id?: StringFilter<"Debt"> | string
    code?: StringFilter<"Debt"> | string
    type?: EnumDebtTypeFilter<"Debt"> | $Enums.DebtType
    partyId?: StringFilter<"Debt"> | string
    assignedToId?: StringNullableFilter<"Debt"> | string | null
    title?: StringFilter<"Debt"> | string
    invoiceNo?: StringNullableFilter<"Debt"> | string | null
    orderNo?: StringNullableFilter<"Debt"> | string | null
    contractNo?: StringNullableFilter<"Debt"> | string | null
    poNo?: StringNullableFilter<"Debt"> | string | null
    description?: StringNullableFilter<"Debt"> | string | null
    originalAmount?: DecimalFilter<"Debt"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFilter<"Debt"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Debt"> | string
    issueDate?: DateTimeFilter<"Debt"> | Date | string
    dueDate?: DateTimeFilter<"Debt"> | Date | string
    status?: EnumDebtStatusFilter<"Debt"> | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFilter<"Debt"> | $Enums.CollectionStatus
    nextFollowUpAt?: DateTimeNullableFilter<"Debt"> | Date | string | null
    followUpNote?: StringNullableFilter<"Debt"> | string | null
    createdById?: StringNullableFilter<"Debt"> | string | null
    createdAt?: DateTimeFilter<"Debt"> | Date | string
    updatedAt?: DateTimeFilter<"Debt"> | Date | string
    party?: XOR<PartyScalarRelationFilter, PartyWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    payments?: PaymentListRelationFilter
  }

  export type DebtOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    partyId?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    title?: SortOrder
    invoiceNo?: SortOrderInput | SortOrder
    orderNo?: SortOrderInput | SortOrder
    contractNo?: SortOrderInput | SortOrder
    poNo?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    originalAmount?: SortOrder
    paidAmount?: SortOrder
    currency?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    collectionStatus?: SortOrder
    nextFollowUpAt?: SortOrderInput | SortOrder
    followUpNote?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    party?: PartyOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type DebtWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: DebtWhereInput | DebtWhereInput[]
    OR?: DebtWhereInput[]
    NOT?: DebtWhereInput | DebtWhereInput[]
    type?: EnumDebtTypeFilter<"Debt"> | $Enums.DebtType
    partyId?: StringFilter<"Debt"> | string
    assignedToId?: StringNullableFilter<"Debt"> | string | null
    title?: StringFilter<"Debt"> | string
    invoiceNo?: StringNullableFilter<"Debt"> | string | null
    orderNo?: StringNullableFilter<"Debt"> | string | null
    contractNo?: StringNullableFilter<"Debt"> | string | null
    poNo?: StringNullableFilter<"Debt"> | string | null
    description?: StringNullableFilter<"Debt"> | string | null
    originalAmount?: DecimalFilter<"Debt"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFilter<"Debt"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Debt"> | string
    issueDate?: DateTimeFilter<"Debt"> | Date | string
    dueDate?: DateTimeFilter<"Debt"> | Date | string
    status?: EnumDebtStatusFilter<"Debt"> | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFilter<"Debt"> | $Enums.CollectionStatus
    nextFollowUpAt?: DateTimeNullableFilter<"Debt"> | Date | string | null
    followUpNote?: StringNullableFilter<"Debt"> | string | null
    createdById?: StringNullableFilter<"Debt"> | string | null
    createdAt?: DateTimeFilter<"Debt"> | Date | string
    updatedAt?: DateTimeFilter<"Debt"> | Date | string
    party?: XOR<PartyScalarRelationFilter, PartyWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    payments?: PaymentListRelationFilter
  }, "id" | "code">

  export type DebtOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    partyId?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    title?: SortOrder
    invoiceNo?: SortOrderInput | SortOrder
    orderNo?: SortOrderInput | SortOrder
    contractNo?: SortOrderInput | SortOrder
    poNo?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    originalAmount?: SortOrder
    paidAmount?: SortOrder
    currency?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    collectionStatus?: SortOrder
    nextFollowUpAt?: SortOrderInput | SortOrder
    followUpNote?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DebtCountOrderByAggregateInput
    _avg?: DebtAvgOrderByAggregateInput
    _max?: DebtMaxOrderByAggregateInput
    _min?: DebtMinOrderByAggregateInput
    _sum?: DebtSumOrderByAggregateInput
  }

  export type DebtScalarWhereWithAggregatesInput = {
    AND?: DebtScalarWhereWithAggregatesInput | DebtScalarWhereWithAggregatesInput[]
    OR?: DebtScalarWhereWithAggregatesInput[]
    NOT?: DebtScalarWhereWithAggregatesInput | DebtScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Debt"> | string
    code?: StringWithAggregatesFilter<"Debt"> | string
    type?: EnumDebtTypeWithAggregatesFilter<"Debt"> | $Enums.DebtType
    partyId?: StringWithAggregatesFilter<"Debt"> | string
    assignedToId?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    title?: StringWithAggregatesFilter<"Debt"> | string
    invoiceNo?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    orderNo?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    contractNo?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    poNo?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    description?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    originalAmount?: DecimalWithAggregatesFilter<"Debt"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalWithAggregatesFilter<"Debt"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Debt"> | string
    issueDate?: DateTimeWithAggregatesFilter<"Debt"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"Debt"> | Date | string
    status?: EnumDebtStatusWithAggregatesFilter<"Debt"> | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusWithAggregatesFilter<"Debt"> | $Enums.CollectionStatus
    nextFollowUpAt?: DateTimeNullableWithAggregatesFilter<"Debt"> | Date | string | null
    followUpNote?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"Debt"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Debt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Debt"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    debtId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    referenceNo?: StringNullableFilter<"Payment"> | string | null
    note?: StringNullableFilter<"Payment"> | string | null
    createdById?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    debt?: XOR<DebtScalarRelationFilter, DebtWhereInput>
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    debtId?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    method?: SortOrder
    referenceNo?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    debt?: DebtOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    debtId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    referenceNo?: StringNullableFilter<"Payment"> | string | null
    note?: StringNullableFilter<"Payment"> | string | null
    createdById?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    debt?: XOR<DebtScalarRelationFilter, DebtWhereInput>
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    debtId?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    method?: SortOrder
    referenceNo?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    debtId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    referenceNo?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    note?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    before?: JsonNullableFilter<"AuditLog">
    after?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrderInput | SortOrder
    after?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    before?: JsonNullableFilter<"AuditLog">
    after?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrderInput | SortOrder
    after?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    actorId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    before?: JsonNullableWithAggregatesFilter<"AuditLog">
    after?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyCreateNestedManyWithoutCreatedByInput
    assignedParties?: PartyCreateNestedManyWithoutAssignedToInput
    debts?: DebtCreateNestedManyWithoutCreatedByInput
    assignedDebts?: DebtCreateNestedManyWithoutAssignedToInput
    payments?: PaymentCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedParties?: PartyUncheckedCreateNestedManyWithoutAssignedToInput
    debts?: DebtUncheckedCreateNestedManyWithoutCreatedByInput
    assignedDebts?: DebtUncheckedCreateNestedManyWithoutAssignedToInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUpdateManyWithoutCreatedByNestedInput
    assignedParties?: PartyUpdateManyWithoutAssignedToNestedInput
    debts?: DebtUpdateManyWithoutCreatedByNestedInput
    assignedDebts?: DebtUpdateManyWithoutAssignedToNestedInput
    payments?: PaymentUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedParties?: PartyUncheckedUpdateManyWithoutAssignedToNestedInput
    debts?: DebtUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedDebts?: DebtUncheckedUpdateManyWithoutAssignedToNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyCreateInput = {
    id?: string
    type: $Enums.PartyType
    code?: string | null
    name: string
    phone?: string | null
    email?: string | null
    taxCode?: string | null
    address?: string | null
    note?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutPartiesInput
    assignedTo?: UserCreateNestedOneWithoutAssignedPartiesInput
    debts?: DebtCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateInput = {
    id?: string
    type: $Enums.PartyType
    code?: string | null
    name: string
    phone?: string | null
    email?: string | null
    taxCode?: string | null
    address?: string | null
    note?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdById?: string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    debts?: DebtUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPartyTypeFieldUpdateOperationsInput | $Enums.PartyType
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutPartiesNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedPartiesNestedInput
    debts?: DebtUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPartyTypeFieldUpdateOperationsInput | $Enums.PartyType
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debts?: DebtUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type PartyCreateManyInput = {
    id?: string
    type: $Enums.PartyType
    code?: string | null
    name: string
    phone?: string | null
    email?: string | null
    taxCode?: string | null
    address?: string | null
    note?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdById?: string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPartyTypeFieldUpdateOperationsInput | $Enums.PartyType
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPartyTypeFieldUpdateOperationsInput | $Enums.PartyType
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtCreateInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    party: PartyCreateNestedOneWithoutDebtsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedDebtsInput
    createdBy?: UserCreateNestedOneWithoutDebtsInput
    payments?: PaymentCreateNestedManyWithoutDebtInput
  }

  export type DebtUncheckedCreateInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    partyId: string
    assignedToId?: string | null
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutDebtInput
  }

  export type DebtUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    party?: PartyUpdateOneRequiredWithoutDebtsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedDebtsNestedInput
    createdBy?: UserUpdateOneWithoutDebtsNestedInput
    payments?: PaymentUpdateManyWithoutDebtNestedInput
  }

  export type DebtUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    partyId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutDebtNestedInput
  }

  export type DebtCreateManyInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    partyId: string
    assignedToId?: string | null
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    partyId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paidAt: Date | string
    method?: $Enums.PaymentMethod
    referenceNo?: string | null
    note?: string | null
    createdAt?: Date | string
    debt: DebtCreateNestedOneWithoutPaymentsInput
    createdBy?: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    debtId: string
    amount: Decimal | DecimalJsLike | number | string
    paidAt: Date | string
    method?: $Enums.PaymentMethod
    referenceNo?: string | null
    note?: string | null
    createdById?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debt?: DebtUpdateOneRequiredWithoutPaymentsNestedInput
    createdBy?: UserUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    debtId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    debtId: string
    amount: Decimal | DecimalJsLike | number | string
    paidAt: Date | string
    method?: $Enums.PaymentMethod
    referenceNo?: string | null
    note?: string | null
    createdById?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    debtId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    actorId?: string | null
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    actorId?: string | null
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PartyListRelationFilter = {
    every?: PartyWhereInput
    some?: PartyWhereInput
    none?: PartyWhereInput
  }

  export type DebtListRelationFilter = {
    every?: DebtWhereInput
    some?: DebtWhereInput
    none?: DebtWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PartyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DebtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPartyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PartyType | EnumPartyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PartyType[] | ListEnumPartyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartyType[] | ListEnumPartyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPartyTypeFilter<$PrismaModel> | $Enums.PartyType
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PartyCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    taxCode?: SortOrder
    address?: SortOrder
    note?: SortOrder
    creditLimit?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartyAvgOrderByAggregateInput = {
    creditLimit?: SortOrder
  }

  export type PartyMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    taxCode?: SortOrder
    address?: SortOrder
    note?: SortOrder
    creditLimit?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartyMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    taxCode?: SortOrder
    address?: SortOrder
    note?: SortOrder
    creditLimit?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartySumOrderByAggregateInput = {
    creditLimit?: SortOrder
  }

  export type EnumPartyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartyType | EnumPartyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PartyType[] | ListEnumPartyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartyType[] | ListEnumPartyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPartyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PartyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPartyTypeFilter<$PrismaModel>
    _max?: NestedEnumPartyTypeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDebtTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DebtType | EnumDebtTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DebtType[] | ListEnumDebtTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DebtType[] | ListEnumDebtTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDebtTypeFilter<$PrismaModel> | $Enums.DebtType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumDebtStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DebtStatus | EnumDebtStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DebtStatus[] | ListEnumDebtStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DebtStatus[] | ListEnumDebtStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDebtStatusFilter<$PrismaModel> | $Enums.DebtStatus
  }

  export type EnumCollectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CollectionStatus | EnumCollectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollectionStatus[] | ListEnumCollectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollectionStatus[] | ListEnumCollectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollectionStatusFilter<$PrismaModel> | $Enums.CollectionStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PartyScalarRelationFilter = {
    is?: PartyWhereInput
    isNot?: PartyWhereInput
  }

  export type DebtCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    partyId?: SortOrder
    assignedToId?: SortOrder
    title?: SortOrder
    invoiceNo?: SortOrder
    orderNo?: SortOrder
    contractNo?: SortOrder
    poNo?: SortOrder
    description?: SortOrder
    originalAmount?: SortOrder
    paidAmount?: SortOrder
    currency?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    collectionStatus?: SortOrder
    nextFollowUpAt?: SortOrder
    followUpNote?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebtAvgOrderByAggregateInput = {
    originalAmount?: SortOrder
    paidAmount?: SortOrder
  }

  export type DebtMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    partyId?: SortOrder
    assignedToId?: SortOrder
    title?: SortOrder
    invoiceNo?: SortOrder
    orderNo?: SortOrder
    contractNo?: SortOrder
    poNo?: SortOrder
    description?: SortOrder
    originalAmount?: SortOrder
    paidAmount?: SortOrder
    currency?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    collectionStatus?: SortOrder
    nextFollowUpAt?: SortOrder
    followUpNote?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebtMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    partyId?: SortOrder
    assignedToId?: SortOrder
    title?: SortOrder
    invoiceNo?: SortOrder
    orderNo?: SortOrder
    contractNo?: SortOrder
    poNo?: SortOrder
    description?: SortOrder
    originalAmount?: SortOrder
    paidAmount?: SortOrder
    currency?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    collectionStatus?: SortOrder
    nextFollowUpAt?: SortOrder
    followUpNote?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebtSumOrderByAggregateInput = {
    originalAmount?: SortOrder
    paidAmount?: SortOrder
  }

  export type EnumDebtTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DebtType | EnumDebtTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DebtType[] | ListEnumDebtTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DebtType[] | ListEnumDebtTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDebtTypeWithAggregatesFilter<$PrismaModel> | $Enums.DebtType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDebtTypeFilter<$PrismaModel>
    _max?: NestedEnumDebtTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumDebtStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DebtStatus | EnumDebtStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DebtStatus[] | ListEnumDebtStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DebtStatus[] | ListEnumDebtStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDebtStatusWithAggregatesFilter<$PrismaModel> | $Enums.DebtStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDebtStatusFilter<$PrismaModel>
    _max?: NestedEnumDebtStatusFilter<$PrismaModel>
  }

  export type EnumCollectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollectionStatus | EnumCollectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollectionStatus[] | ListEnumCollectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollectionStatus[] | ListEnumCollectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CollectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollectionStatusFilter<$PrismaModel>
    _max?: NestedEnumCollectionStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type DebtScalarRelationFilter = {
    is?: DebtWhereInput
    isNot?: DebtWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    debtId?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    method?: SortOrder
    referenceNo?: SortOrder
    note?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    debtId?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    method?: SortOrder
    referenceNo?: SortOrder
    note?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    debtId?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    method?: SortOrder
    referenceNo?: SortOrder
    note?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrder
    after?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type PartyCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PartyCreateWithoutCreatedByInput, PartyUncheckedCreateWithoutCreatedByInput> | PartyCreateWithoutCreatedByInput[] | PartyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutCreatedByInput | PartyCreateOrConnectWithoutCreatedByInput[]
    createMany?: PartyCreateManyCreatedByInputEnvelope
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
  }

  export type PartyCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<PartyCreateWithoutAssignedToInput, PartyUncheckedCreateWithoutAssignedToInput> | PartyCreateWithoutAssignedToInput[] | PartyUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutAssignedToInput | PartyCreateOrConnectWithoutAssignedToInput[]
    createMany?: PartyCreateManyAssignedToInputEnvelope
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
  }

  export type DebtCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DebtCreateWithoutCreatedByInput, DebtUncheckedCreateWithoutCreatedByInput> | DebtCreateWithoutCreatedByInput[] | DebtUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutCreatedByInput | DebtCreateOrConnectWithoutCreatedByInput[]
    createMany?: DebtCreateManyCreatedByInputEnvelope
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
  }

  export type DebtCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<DebtCreateWithoutAssignedToInput, DebtUncheckedCreateWithoutAssignedToInput> | DebtCreateWithoutAssignedToInput[] | DebtUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutAssignedToInput | DebtCreateOrConnectWithoutAssignedToInput[]
    createMany?: DebtCreateManyAssignedToInputEnvelope
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PaymentCreateWithoutCreatedByInput, PaymentUncheckedCreateWithoutCreatedByInput> | PaymentCreateWithoutCreatedByInput[] | PaymentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCreatedByInput | PaymentCreateOrConnectWithoutCreatedByInput[]
    createMany?: PaymentCreateManyCreatedByInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type PartyUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PartyCreateWithoutCreatedByInput, PartyUncheckedCreateWithoutCreatedByInput> | PartyCreateWithoutCreatedByInput[] | PartyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutCreatedByInput | PartyCreateOrConnectWithoutCreatedByInput[]
    createMany?: PartyCreateManyCreatedByInputEnvelope
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
  }

  export type PartyUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<PartyCreateWithoutAssignedToInput, PartyUncheckedCreateWithoutAssignedToInput> | PartyCreateWithoutAssignedToInput[] | PartyUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutAssignedToInput | PartyCreateOrConnectWithoutAssignedToInput[]
    createMany?: PartyCreateManyAssignedToInputEnvelope
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
  }

  export type DebtUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DebtCreateWithoutCreatedByInput, DebtUncheckedCreateWithoutCreatedByInput> | DebtCreateWithoutCreatedByInput[] | DebtUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutCreatedByInput | DebtCreateOrConnectWithoutCreatedByInput[]
    createMany?: DebtCreateManyCreatedByInputEnvelope
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
  }

  export type DebtUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<DebtCreateWithoutAssignedToInput, DebtUncheckedCreateWithoutAssignedToInput> | DebtCreateWithoutAssignedToInput[] | DebtUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutAssignedToInput | DebtCreateOrConnectWithoutAssignedToInput[]
    createMany?: DebtCreateManyAssignedToInputEnvelope
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PaymentCreateWithoutCreatedByInput, PaymentUncheckedCreateWithoutCreatedByInput> | PaymentCreateWithoutCreatedByInput[] | PaymentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCreatedByInput | PaymentCreateOrConnectWithoutCreatedByInput[]
    createMany?: PaymentCreateManyCreatedByInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PartyUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PartyCreateWithoutCreatedByInput, PartyUncheckedCreateWithoutCreatedByInput> | PartyCreateWithoutCreatedByInput[] | PartyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutCreatedByInput | PartyCreateOrConnectWithoutCreatedByInput[]
    upsert?: PartyUpsertWithWhereUniqueWithoutCreatedByInput | PartyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PartyCreateManyCreatedByInputEnvelope
    set?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    disconnect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    delete?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    update?: PartyUpdateWithWhereUniqueWithoutCreatedByInput | PartyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PartyUpdateManyWithWhereWithoutCreatedByInput | PartyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PartyScalarWhereInput | PartyScalarWhereInput[]
  }

  export type PartyUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<PartyCreateWithoutAssignedToInput, PartyUncheckedCreateWithoutAssignedToInput> | PartyCreateWithoutAssignedToInput[] | PartyUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutAssignedToInput | PartyCreateOrConnectWithoutAssignedToInput[]
    upsert?: PartyUpsertWithWhereUniqueWithoutAssignedToInput | PartyUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: PartyCreateManyAssignedToInputEnvelope
    set?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    disconnect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    delete?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    update?: PartyUpdateWithWhereUniqueWithoutAssignedToInput | PartyUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: PartyUpdateManyWithWhereWithoutAssignedToInput | PartyUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: PartyScalarWhereInput | PartyScalarWhereInput[]
  }

  export type DebtUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DebtCreateWithoutCreatedByInput, DebtUncheckedCreateWithoutCreatedByInput> | DebtCreateWithoutCreatedByInput[] | DebtUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutCreatedByInput | DebtCreateOrConnectWithoutCreatedByInput[]
    upsert?: DebtUpsertWithWhereUniqueWithoutCreatedByInput | DebtUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DebtCreateManyCreatedByInputEnvelope
    set?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    disconnect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    delete?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    update?: DebtUpdateWithWhereUniqueWithoutCreatedByInput | DebtUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DebtUpdateManyWithWhereWithoutCreatedByInput | DebtUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DebtScalarWhereInput | DebtScalarWhereInput[]
  }

  export type DebtUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<DebtCreateWithoutAssignedToInput, DebtUncheckedCreateWithoutAssignedToInput> | DebtCreateWithoutAssignedToInput[] | DebtUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutAssignedToInput | DebtCreateOrConnectWithoutAssignedToInput[]
    upsert?: DebtUpsertWithWhereUniqueWithoutAssignedToInput | DebtUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: DebtCreateManyAssignedToInputEnvelope
    set?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    disconnect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    delete?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    update?: DebtUpdateWithWhereUniqueWithoutAssignedToInput | DebtUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: DebtUpdateManyWithWhereWithoutAssignedToInput | DebtUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: DebtScalarWhereInput | DebtScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PaymentCreateWithoutCreatedByInput, PaymentUncheckedCreateWithoutCreatedByInput> | PaymentCreateWithoutCreatedByInput[] | PaymentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCreatedByInput | PaymentCreateOrConnectWithoutCreatedByInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCreatedByInput | PaymentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PaymentCreateManyCreatedByInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCreatedByInput | PaymentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCreatedByInput | PaymentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type PartyUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PartyCreateWithoutCreatedByInput, PartyUncheckedCreateWithoutCreatedByInput> | PartyCreateWithoutCreatedByInput[] | PartyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutCreatedByInput | PartyCreateOrConnectWithoutCreatedByInput[]
    upsert?: PartyUpsertWithWhereUniqueWithoutCreatedByInput | PartyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PartyCreateManyCreatedByInputEnvelope
    set?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    disconnect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    delete?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    update?: PartyUpdateWithWhereUniqueWithoutCreatedByInput | PartyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PartyUpdateManyWithWhereWithoutCreatedByInput | PartyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PartyScalarWhereInput | PartyScalarWhereInput[]
  }

  export type PartyUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<PartyCreateWithoutAssignedToInput, PartyUncheckedCreateWithoutAssignedToInput> | PartyCreateWithoutAssignedToInput[] | PartyUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutAssignedToInput | PartyCreateOrConnectWithoutAssignedToInput[]
    upsert?: PartyUpsertWithWhereUniqueWithoutAssignedToInput | PartyUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: PartyCreateManyAssignedToInputEnvelope
    set?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    disconnect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    delete?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    update?: PartyUpdateWithWhereUniqueWithoutAssignedToInput | PartyUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: PartyUpdateManyWithWhereWithoutAssignedToInput | PartyUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: PartyScalarWhereInput | PartyScalarWhereInput[]
  }

  export type DebtUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DebtCreateWithoutCreatedByInput, DebtUncheckedCreateWithoutCreatedByInput> | DebtCreateWithoutCreatedByInput[] | DebtUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutCreatedByInput | DebtCreateOrConnectWithoutCreatedByInput[]
    upsert?: DebtUpsertWithWhereUniqueWithoutCreatedByInput | DebtUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DebtCreateManyCreatedByInputEnvelope
    set?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    disconnect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    delete?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    update?: DebtUpdateWithWhereUniqueWithoutCreatedByInput | DebtUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DebtUpdateManyWithWhereWithoutCreatedByInput | DebtUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DebtScalarWhereInput | DebtScalarWhereInput[]
  }

  export type DebtUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<DebtCreateWithoutAssignedToInput, DebtUncheckedCreateWithoutAssignedToInput> | DebtCreateWithoutAssignedToInput[] | DebtUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutAssignedToInput | DebtCreateOrConnectWithoutAssignedToInput[]
    upsert?: DebtUpsertWithWhereUniqueWithoutAssignedToInput | DebtUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: DebtCreateManyAssignedToInputEnvelope
    set?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    disconnect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    delete?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    update?: DebtUpdateWithWhereUniqueWithoutAssignedToInput | DebtUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: DebtUpdateManyWithWhereWithoutAssignedToInput | DebtUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: DebtScalarWhereInput | DebtScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PaymentCreateWithoutCreatedByInput, PaymentUncheckedCreateWithoutCreatedByInput> | PaymentCreateWithoutCreatedByInput[] | PaymentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCreatedByInput | PaymentCreateOrConnectWithoutCreatedByInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCreatedByInput | PaymentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PaymentCreateManyCreatedByInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCreatedByInput | PaymentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCreatedByInput | PaymentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPartiesInput = {
    create?: XOR<UserCreateWithoutPartiesInput, UserUncheckedCreateWithoutPartiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedPartiesInput = {
    create?: XOR<UserCreateWithoutAssignedPartiesInput, UserUncheckedCreateWithoutAssignedPartiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedPartiesInput
    connect?: UserWhereUniqueInput
  }

  export type DebtCreateNestedManyWithoutPartyInput = {
    create?: XOR<DebtCreateWithoutPartyInput, DebtUncheckedCreateWithoutPartyInput> | DebtCreateWithoutPartyInput[] | DebtUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutPartyInput | DebtCreateOrConnectWithoutPartyInput[]
    createMany?: DebtCreateManyPartyInputEnvelope
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
  }

  export type DebtUncheckedCreateNestedManyWithoutPartyInput = {
    create?: XOR<DebtCreateWithoutPartyInput, DebtUncheckedCreateWithoutPartyInput> | DebtCreateWithoutPartyInput[] | DebtUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutPartyInput | DebtCreateOrConnectWithoutPartyInput[]
    createMany?: DebtCreateManyPartyInputEnvelope
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
  }

  export type EnumPartyTypeFieldUpdateOperationsInput = {
    set?: $Enums.PartyType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutPartiesNestedInput = {
    create?: XOR<UserCreateWithoutPartiesInput, UserUncheckedCreateWithoutPartiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartiesInput
    upsert?: UserUpsertWithoutPartiesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPartiesInput, UserUpdateWithoutPartiesInput>, UserUncheckedUpdateWithoutPartiesInput>
  }

  export type UserUpdateOneWithoutAssignedPartiesNestedInput = {
    create?: XOR<UserCreateWithoutAssignedPartiesInput, UserUncheckedCreateWithoutAssignedPartiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedPartiesInput
    upsert?: UserUpsertWithoutAssignedPartiesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedPartiesInput, UserUpdateWithoutAssignedPartiesInput>, UserUncheckedUpdateWithoutAssignedPartiesInput>
  }

  export type DebtUpdateManyWithoutPartyNestedInput = {
    create?: XOR<DebtCreateWithoutPartyInput, DebtUncheckedCreateWithoutPartyInput> | DebtCreateWithoutPartyInput[] | DebtUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutPartyInput | DebtCreateOrConnectWithoutPartyInput[]
    upsert?: DebtUpsertWithWhereUniqueWithoutPartyInput | DebtUpsertWithWhereUniqueWithoutPartyInput[]
    createMany?: DebtCreateManyPartyInputEnvelope
    set?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    disconnect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    delete?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    update?: DebtUpdateWithWhereUniqueWithoutPartyInput | DebtUpdateWithWhereUniqueWithoutPartyInput[]
    updateMany?: DebtUpdateManyWithWhereWithoutPartyInput | DebtUpdateManyWithWhereWithoutPartyInput[]
    deleteMany?: DebtScalarWhereInput | DebtScalarWhereInput[]
  }

  export type DebtUncheckedUpdateManyWithoutPartyNestedInput = {
    create?: XOR<DebtCreateWithoutPartyInput, DebtUncheckedCreateWithoutPartyInput> | DebtCreateWithoutPartyInput[] | DebtUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: DebtCreateOrConnectWithoutPartyInput | DebtCreateOrConnectWithoutPartyInput[]
    upsert?: DebtUpsertWithWhereUniqueWithoutPartyInput | DebtUpsertWithWhereUniqueWithoutPartyInput[]
    createMany?: DebtCreateManyPartyInputEnvelope
    set?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    disconnect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    delete?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    connect?: DebtWhereUniqueInput | DebtWhereUniqueInput[]
    update?: DebtUpdateWithWhereUniqueWithoutPartyInput | DebtUpdateWithWhereUniqueWithoutPartyInput[]
    updateMany?: DebtUpdateManyWithWhereWithoutPartyInput | DebtUpdateManyWithWhereWithoutPartyInput[]
    deleteMany?: DebtScalarWhereInput | DebtScalarWhereInput[]
  }

  export type PartyCreateNestedOneWithoutDebtsInput = {
    create?: XOR<PartyCreateWithoutDebtsInput, PartyUncheckedCreateWithoutDebtsInput>
    connectOrCreate?: PartyCreateOrConnectWithoutDebtsInput
    connect?: PartyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedDebtsInput = {
    create?: XOR<UserCreateWithoutAssignedDebtsInput, UserUncheckedCreateWithoutAssignedDebtsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedDebtsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDebtsInput = {
    create?: XOR<UserCreateWithoutDebtsInput, UserUncheckedCreateWithoutDebtsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDebtsInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutDebtInput = {
    create?: XOR<PaymentCreateWithoutDebtInput, PaymentUncheckedCreateWithoutDebtInput> | PaymentCreateWithoutDebtInput[] | PaymentUncheckedCreateWithoutDebtInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutDebtInput | PaymentCreateOrConnectWithoutDebtInput[]
    createMany?: PaymentCreateManyDebtInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutDebtInput = {
    create?: XOR<PaymentCreateWithoutDebtInput, PaymentUncheckedCreateWithoutDebtInput> | PaymentCreateWithoutDebtInput[] | PaymentUncheckedCreateWithoutDebtInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutDebtInput | PaymentCreateOrConnectWithoutDebtInput[]
    createMany?: PaymentCreateManyDebtInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumDebtTypeFieldUpdateOperationsInput = {
    set?: $Enums.DebtType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumDebtStatusFieldUpdateOperationsInput = {
    set?: $Enums.DebtStatus
  }

  export type EnumCollectionStatusFieldUpdateOperationsInput = {
    set?: $Enums.CollectionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PartyUpdateOneRequiredWithoutDebtsNestedInput = {
    create?: XOR<PartyCreateWithoutDebtsInput, PartyUncheckedCreateWithoutDebtsInput>
    connectOrCreate?: PartyCreateOrConnectWithoutDebtsInput
    upsert?: PartyUpsertWithoutDebtsInput
    connect?: PartyWhereUniqueInput
    update?: XOR<XOR<PartyUpdateToOneWithWhereWithoutDebtsInput, PartyUpdateWithoutDebtsInput>, PartyUncheckedUpdateWithoutDebtsInput>
  }

  export type UserUpdateOneWithoutAssignedDebtsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedDebtsInput, UserUncheckedCreateWithoutAssignedDebtsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedDebtsInput
    upsert?: UserUpsertWithoutAssignedDebtsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedDebtsInput, UserUpdateWithoutAssignedDebtsInput>, UserUncheckedUpdateWithoutAssignedDebtsInput>
  }

  export type UserUpdateOneWithoutDebtsNestedInput = {
    create?: XOR<UserCreateWithoutDebtsInput, UserUncheckedCreateWithoutDebtsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDebtsInput
    upsert?: UserUpsertWithoutDebtsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDebtsInput, UserUpdateWithoutDebtsInput>, UserUncheckedUpdateWithoutDebtsInput>
  }

  export type PaymentUpdateManyWithoutDebtNestedInput = {
    create?: XOR<PaymentCreateWithoutDebtInput, PaymentUncheckedCreateWithoutDebtInput> | PaymentCreateWithoutDebtInput[] | PaymentUncheckedCreateWithoutDebtInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutDebtInput | PaymentCreateOrConnectWithoutDebtInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutDebtInput | PaymentUpsertWithWhereUniqueWithoutDebtInput[]
    createMany?: PaymentCreateManyDebtInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutDebtInput | PaymentUpdateWithWhereUniqueWithoutDebtInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutDebtInput | PaymentUpdateManyWithWhereWithoutDebtInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutDebtNestedInput = {
    create?: XOR<PaymentCreateWithoutDebtInput, PaymentUncheckedCreateWithoutDebtInput> | PaymentCreateWithoutDebtInput[] | PaymentUncheckedCreateWithoutDebtInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutDebtInput | PaymentCreateOrConnectWithoutDebtInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutDebtInput | PaymentUpsertWithWhereUniqueWithoutDebtInput[]
    createMany?: PaymentCreateManyDebtInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutDebtInput | PaymentUpdateWithWhereUniqueWithoutDebtInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutDebtInput | PaymentUpdateManyWithWhereWithoutDebtInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type DebtCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<DebtCreateWithoutPaymentsInput, DebtUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: DebtCreateOrConnectWithoutPaymentsInput
    connect?: DebtWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type DebtUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<DebtCreateWithoutPaymentsInput, DebtUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: DebtCreateOrConnectWithoutPaymentsInput
    upsert?: DebtUpsertWithoutPaymentsInput
    connect?: DebtWhereUniqueInput
    update?: XOR<XOR<DebtUpdateToOneWithWhereWithoutPaymentsInput, DebtUpdateWithoutPaymentsInput>, DebtUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPartyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PartyType | EnumPartyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PartyType[] | ListEnumPartyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartyType[] | ListEnumPartyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPartyTypeFilter<$PrismaModel> | $Enums.PartyType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPartyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartyType | EnumPartyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PartyType[] | ListEnumPartyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartyType[] | ListEnumPartyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPartyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PartyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPartyTypeFilter<$PrismaModel>
    _max?: NestedEnumPartyTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDebtTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DebtType | EnumDebtTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DebtType[] | ListEnumDebtTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DebtType[] | ListEnumDebtTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDebtTypeFilter<$PrismaModel> | $Enums.DebtType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumDebtStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DebtStatus | EnumDebtStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DebtStatus[] | ListEnumDebtStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DebtStatus[] | ListEnumDebtStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDebtStatusFilter<$PrismaModel> | $Enums.DebtStatus
  }

  export type NestedEnumCollectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CollectionStatus | EnumCollectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollectionStatus[] | ListEnumCollectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollectionStatus[] | ListEnumCollectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollectionStatusFilter<$PrismaModel> | $Enums.CollectionStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDebtTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DebtType | EnumDebtTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DebtType[] | ListEnumDebtTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DebtType[] | ListEnumDebtTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDebtTypeWithAggregatesFilter<$PrismaModel> | $Enums.DebtType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDebtTypeFilter<$PrismaModel>
    _max?: NestedEnumDebtTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumDebtStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DebtStatus | EnumDebtStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DebtStatus[] | ListEnumDebtStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DebtStatus[] | ListEnumDebtStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDebtStatusWithAggregatesFilter<$PrismaModel> | $Enums.DebtStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDebtStatusFilter<$PrismaModel>
    _max?: NestedEnumDebtStatusFilter<$PrismaModel>
  }

  export type NestedEnumCollectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollectionStatus | EnumCollectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CollectionStatus[] | ListEnumCollectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollectionStatus[] | ListEnumCollectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCollectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CollectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollectionStatusFilter<$PrismaModel>
    _max?: NestedEnumCollectionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PartyCreateWithoutCreatedByInput = {
    id?: string
    type: $Enums.PartyType
    code?: string | null
    name: string
    phone?: string | null
    email?: string | null
    taxCode?: string | null
    address?: string | null
    note?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutAssignedPartiesInput
    debts?: DebtCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateWithoutCreatedByInput = {
    id?: string
    type: $Enums.PartyType
    code?: string | null
    name: string
    phone?: string | null
    email?: string | null
    taxCode?: string | null
    address?: string | null
    note?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    debts?: DebtUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyCreateOrConnectWithoutCreatedByInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutCreatedByInput, PartyUncheckedCreateWithoutCreatedByInput>
  }

  export type PartyCreateManyCreatedByInputEnvelope = {
    data: PartyCreateManyCreatedByInput | PartyCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type PartyCreateWithoutAssignedToInput = {
    id?: string
    type: $Enums.PartyType
    code?: string | null
    name: string
    phone?: string | null
    email?: string | null
    taxCode?: string | null
    address?: string | null
    note?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutPartiesInput
    debts?: DebtCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateWithoutAssignedToInput = {
    id?: string
    type: $Enums.PartyType
    code?: string | null
    name: string
    phone?: string | null
    email?: string | null
    taxCode?: string | null
    address?: string | null
    note?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    debts?: DebtUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyCreateOrConnectWithoutAssignedToInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutAssignedToInput, PartyUncheckedCreateWithoutAssignedToInput>
  }

  export type PartyCreateManyAssignedToInputEnvelope = {
    data: PartyCreateManyAssignedToInput | PartyCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type DebtCreateWithoutCreatedByInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    party: PartyCreateNestedOneWithoutDebtsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedDebtsInput
    payments?: PaymentCreateNestedManyWithoutDebtInput
  }

  export type DebtUncheckedCreateWithoutCreatedByInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    partyId: string
    assignedToId?: string | null
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutDebtInput
  }

  export type DebtCreateOrConnectWithoutCreatedByInput = {
    where: DebtWhereUniqueInput
    create: XOR<DebtCreateWithoutCreatedByInput, DebtUncheckedCreateWithoutCreatedByInput>
  }

  export type DebtCreateManyCreatedByInputEnvelope = {
    data: DebtCreateManyCreatedByInput | DebtCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DebtCreateWithoutAssignedToInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    party: PartyCreateNestedOneWithoutDebtsInput
    createdBy?: UserCreateNestedOneWithoutDebtsInput
    payments?: PaymentCreateNestedManyWithoutDebtInput
  }

  export type DebtUncheckedCreateWithoutAssignedToInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    partyId: string
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutDebtInput
  }

  export type DebtCreateOrConnectWithoutAssignedToInput = {
    where: DebtWhereUniqueInput
    create: XOR<DebtCreateWithoutAssignedToInput, DebtUncheckedCreateWithoutAssignedToInput>
  }

  export type DebtCreateManyAssignedToInputEnvelope = {
    data: DebtCreateManyAssignedToInput | DebtCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutCreatedByInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paidAt: Date | string
    method?: $Enums.PaymentMethod
    referenceNo?: string | null
    note?: string | null
    createdAt?: Date | string
    debt: DebtCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutCreatedByInput = {
    id?: string
    debtId: string
    amount: Decimal | DecimalJsLike | number | string
    paidAt: Date | string
    method?: $Enums.PaymentMethod
    referenceNo?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutCreatedByInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCreatedByInput, PaymentUncheckedCreateWithoutCreatedByInput>
  }

  export type PaymentCreateManyCreatedByInputEnvelope = {
    data: PaymentCreateManyCreatedByInput | PaymentCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutActorInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogCreateManyActorInputEnvelope = {
    data: AuditLogCreateManyActorInput | AuditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type PartyUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PartyWhereUniqueInput
    update: XOR<PartyUpdateWithoutCreatedByInput, PartyUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PartyCreateWithoutCreatedByInput, PartyUncheckedCreateWithoutCreatedByInput>
  }

  export type PartyUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PartyWhereUniqueInput
    data: XOR<PartyUpdateWithoutCreatedByInput, PartyUncheckedUpdateWithoutCreatedByInput>
  }

  export type PartyUpdateManyWithWhereWithoutCreatedByInput = {
    where: PartyScalarWhereInput
    data: XOR<PartyUpdateManyMutationInput, PartyUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PartyScalarWhereInput = {
    AND?: PartyScalarWhereInput | PartyScalarWhereInput[]
    OR?: PartyScalarWhereInput[]
    NOT?: PartyScalarWhereInput | PartyScalarWhereInput[]
    id?: StringFilter<"Party"> | string
    type?: EnumPartyTypeFilter<"Party"> | $Enums.PartyType
    code?: StringNullableFilter<"Party"> | string | null
    name?: StringFilter<"Party"> | string
    phone?: StringNullableFilter<"Party"> | string | null
    email?: StringNullableFilter<"Party"> | string | null
    taxCode?: StringNullableFilter<"Party"> | string | null
    address?: StringNullableFilter<"Party"> | string | null
    note?: StringNullableFilter<"Party"> | string | null
    creditLimit?: DecimalNullableFilter<"Party"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"Party"> | boolean
    createdById?: StringNullableFilter<"Party"> | string | null
    assignedToId?: StringNullableFilter<"Party"> | string | null
    createdAt?: DateTimeFilter<"Party"> | Date | string
    updatedAt?: DateTimeFilter<"Party"> | Date | string
  }

  export type PartyUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: PartyWhereUniqueInput
    update: XOR<PartyUpdateWithoutAssignedToInput, PartyUncheckedUpdateWithoutAssignedToInput>
    create: XOR<PartyCreateWithoutAssignedToInput, PartyUncheckedCreateWithoutAssignedToInput>
  }

  export type PartyUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: PartyWhereUniqueInput
    data: XOR<PartyUpdateWithoutAssignedToInput, PartyUncheckedUpdateWithoutAssignedToInput>
  }

  export type PartyUpdateManyWithWhereWithoutAssignedToInput = {
    where: PartyScalarWhereInput
    data: XOR<PartyUpdateManyMutationInput, PartyUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type DebtUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DebtWhereUniqueInput
    update: XOR<DebtUpdateWithoutCreatedByInput, DebtUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DebtCreateWithoutCreatedByInput, DebtUncheckedCreateWithoutCreatedByInput>
  }

  export type DebtUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DebtWhereUniqueInput
    data: XOR<DebtUpdateWithoutCreatedByInput, DebtUncheckedUpdateWithoutCreatedByInput>
  }

  export type DebtUpdateManyWithWhereWithoutCreatedByInput = {
    where: DebtScalarWhereInput
    data: XOR<DebtUpdateManyMutationInput, DebtUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DebtScalarWhereInput = {
    AND?: DebtScalarWhereInput | DebtScalarWhereInput[]
    OR?: DebtScalarWhereInput[]
    NOT?: DebtScalarWhereInput | DebtScalarWhereInput[]
    id?: StringFilter<"Debt"> | string
    code?: StringFilter<"Debt"> | string
    type?: EnumDebtTypeFilter<"Debt"> | $Enums.DebtType
    partyId?: StringFilter<"Debt"> | string
    assignedToId?: StringNullableFilter<"Debt"> | string | null
    title?: StringFilter<"Debt"> | string
    invoiceNo?: StringNullableFilter<"Debt"> | string | null
    orderNo?: StringNullableFilter<"Debt"> | string | null
    contractNo?: StringNullableFilter<"Debt"> | string | null
    poNo?: StringNullableFilter<"Debt"> | string | null
    description?: StringNullableFilter<"Debt"> | string | null
    originalAmount?: DecimalFilter<"Debt"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFilter<"Debt"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Debt"> | string
    issueDate?: DateTimeFilter<"Debt"> | Date | string
    dueDate?: DateTimeFilter<"Debt"> | Date | string
    status?: EnumDebtStatusFilter<"Debt"> | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFilter<"Debt"> | $Enums.CollectionStatus
    nextFollowUpAt?: DateTimeNullableFilter<"Debt"> | Date | string | null
    followUpNote?: StringNullableFilter<"Debt"> | string | null
    createdById?: StringNullableFilter<"Debt"> | string | null
    createdAt?: DateTimeFilter<"Debt"> | Date | string
    updatedAt?: DateTimeFilter<"Debt"> | Date | string
  }

  export type DebtUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: DebtWhereUniqueInput
    update: XOR<DebtUpdateWithoutAssignedToInput, DebtUncheckedUpdateWithoutAssignedToInput>
    create: XOR<DebtCreateWithoutAssignedToInput, DebtUncheckedCreateWithoutAssignedToInput>
  }

  export type DebtUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: DebtWhereUniqueInput
    data: XOR<DebtUpdateWithoutAssignedToInput, DebtUncheckedUpdateWithoutAssignedToInput>
  }

  export type DebtUpdateManyWithWhereWithoutAssignedToInput = {
    where: DebtScalarWhereInput
    data: XOR<DebtUpdateManyMutationInput, DebtUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutCreatedByInput, PaymentUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PaymentCreateWithoutCreatedByInput, PaymentUncheckedCreateWithoutCreatedByInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutCreatedByInput, PaymentUncheckedUpdateWithoutCreatedByInput>
  }

  export type PaymentUpdateManyWithWhereWithoutCreatedByInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    debtId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    referenceNo?: StringNullableFilter<"Payment"> | string | null
    note?: StringNullableFilter<"Payment"> | string | null
    createdById?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    before?: JsonNullableFilter<"AuditLog">
    after?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UserCreateWithoutPartiesInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedParties?: PartyCreateNestedManyWithoutAssignedToInput
    debts?: DebtCreateNestedManyWithoutCreatedByInput
    assignedDebts?: DebtCreateNestedManyWithoutAssignedToInput
    payments?: PaymentCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutPartiesInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedParties?: PartyUncheckedCreateNestedManyWithoutAssignedToInput
    debts?: DebtUncheckedCreateNestedManyWithoutCreatedByInput
    assignedDebts?: DebtUncheckedCreateNestedManyWithoutAssignedToInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutPartiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPartiesInput, UserUncheckedCreateWithoutPartiesInput>
  }

  export type UserCreateWithoutAssignedPartiesInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyCreateNestedManyWithoutCreatedByInput
    debts?: DebtCreateNestedManyWithoutCreatedByInput
    assignedDebts?: DebtCreateNestedManyWithoutAssignedToInput
    payments?: PaymentCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutAssignedPartiesInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyUncheckedCreateNestedManyWithoutCreatedByInput
    debts?: DebtUncheckedCreateNestedManyWithoutCreatedByInput
    assignedDebts?: DebtUncheckedCreateNestedManyWithoutAssignedToInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutAssignedPartiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedPartiesInput, UserUncheckedCreateWithoutAssignedPartiesInput>
  }

  export type DebtCreateWithoutPartyInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutAssignedDebtsInput
    createdBy?: UserCreateNestedOneWithoutDebtsInput
    payments?: PaymentCreateNestedManyWithoutDebtInput
  }

  export type DebtUncheckedCreateWithoutPartyInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    assignedToId?: string | null
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutDebtInput
  }

  export type DebtCreateOrConnectWithoutPartyInput = {
    where: DebtWhereUniqueInput
    create: XOR<DebtCreateWithoutPartyInput, DebtUncheckedCreateWithoutPartyInput>
  }

  export type DebtCreateManyPartyInputEnvelope = {
    data: DebtCreateManyPartyInput | DebtCreateManyPartyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPartiesInput = {
    update: XOR<UserUpdateWithoutPartiesInput, UserUncheckedUpdateWithoutPartiesInput>
    create: XOR<UserCreateWithoutPartiesInput, UserUncheckedCreateWithoutPartiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPartiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPartiesInput, UserUncheckedUpdateWithoutPartiesInput>
  }

  export type UserUpdateWithoutPartiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedParties?: PartyUpdateManyWithoutAssignedToNestedInput
    debts?: DebtUpdateManyWithoutCreatedByNestedInput
    assignedDebts?: DebtUpdateManyWithoutAssignedToNestedInput
    payments?: PaymentUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutPartiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedParties?: PartyUncheckedUpdateManyWithoutAssignedToNestedInput
    debts?: DebtUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedDebts?: DebtUncheckedUpdateManyWithoutAssignedToNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserUpsertWithoutAssignedPartiesInput = {
    update: XOR<UserUpdateWithoutAssignedPartiesInput, UserUncheckedUpdateWithoutAssignedPartiesInput>
    create: XOR<UserCreateWithoutAssignedPartiesInput, UserUncheckedCreateWithoutAssignedPartiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedPartiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedPartiesInput, UserUncheckedUpdateWithoutAssignedPartiesInput>
  }

  export type UserUpdateWithoutAssignedPartiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUpdateManyWithoutCreatedByNestedInput
    debts?: DebtUpdateManyWithoutCreatedByNestedInput
    assignedDebts?: DebtUpdateManyWithoutAssignedToNestedInput
    payments?: PaymentUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedPartiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUncheckedUpdateManyWithoutCreatedByNestedInput
    debts?: DebtUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedDebts?: DebtUncheckedUpdateManyWithoutAssignedToNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type DebtUpsertWithWhereUniqueWithoutPartyInput = {
    where: DebtWhereUniqueInput
    update: XOR<DebtUpdateWithoutPartyInput, DebtUncheckedUpdateWithoutPartyInput>
    create: XOR<DebtCreateWithoutPartyInput, DebtUncheckedCreateWithoutPartyInput>
  }

  export type DebtUpdateWithWhereUniqueWithoutPartyInput = {
    where: DebtWhereUniqueInput
    data: XOR<DebtUpdateWithoutPartyInput, DebtUncheckedUpdateWithoutPartyInput>
  }

  export type DebtUpdateManyWithWhereWithoutPartyInput = {
    where: DebtScalarWhereInput
    data: XOR<DebtUpdateManyMutationInput, DebtUncheckedUpdateManyWithoutPartyInput>
  }

  export type PartyCreateWithoutDebtsInput = {
    id?: string
    type: $Enums.PartyType
    code?: string | null
    name: string
    phone?: string | null
    email?: string | null
    taxCode?: string | null
    address?: string | null
    note?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutPartiesInput
    assignedTo?: UserCreateNestedOneWithoutAssignedPartiesInput
  }

  export type PartyUncheckedCreateWithoutDebtsInput = {
    id?: string
    type: $Enums.PartyType
    code?: string | null
    name: string
    phone?: string | null
    email?: string | null
    taxCode?: string | null
    address?: string | null
    note?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdById?: string | null
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyCreateOrConnectWithoutDebtsInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutDebtsInput, PartyUncheckedCreateWithoutDebtsInput>
  }

  export type UserCreateWithoutAssignedDebtsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyCreateNestedManyWithoutCreatedByInput
    assignedParties?: PartyCreateNestedManyWithoutAssignedToInput
    debts?: DebtCreateNestedManyWithoutCreatedByInput
    payments?: PaymentCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutAssignedDebtsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedParties?: PartyUncheckedCreateNestedManyWithoutAssignedToInput
    debts?: DebtUncheckedCreateNestedManyWithoutCreatedByInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutAssignedDebtsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedDebtsInput, UserUncheckedCreateWithoutAssignedDebtsInput>
  }

  export type UserCreateWithoutDebtsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyCreateNestedManyWithoutCreatedByInput
    assignedParties?: PartyCreateNestedManyWithoutAssignedToInput
    assignedDebts?: DebtCreateNestedManyWithoutAssignedToInput
    payments?: PaymentCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutDebtsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedParties?: PartyUncheckedCreateNestedManyWithoutAssignedToInput
    assignedDebts?: DebtUncheckedCreateNestedManyWithoutAssignedToInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCreatedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutDebtsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDebtsInput, UserUncheckedCreateWithoutDebtsInput>
  }

  export type PaymentCreateWithoutDebtInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paidAt: Date | string
    method?: $Enums.PaymentMethod
    referenceNo?: string | null
    note?: string | null
    createdAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutDebtInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paidAt: Date | string
    method?: $Enums.PaymentMethod
    referenceNo?: string | null
    note?: string | null
    createdById?: string | null
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutDebtInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutDebtInput, PaymentUncheckedCreateWithoutDebtInput>
  }

  export type PaymentCreateManyDebtInputEnvelope = {
    data: PaymentCreateManyDebtInput | PaymentCreateManyDebtInput[]
    skipDuplicates?: boolean
  }

  export type PartyUpsertWithoutDebtsInput = {
    update: XOR<PartyUpdateWithoutDebtsInput, PartyUncheckedUpdateWithoutDebtsInput>
    create: XOR<PartyCreateWithoutDebtsInput, PartyUncheckedCreateWithoutDebtsInput>
    where?: PartyWhereInput
  }

  export type PartyUpdateToOneWithWhereWithoutDebtsInput = {
    where?: PartyWhereInput
    data: XOR<PartyUpdateWithoutDebtsInput, PartyUncheckedUpdateWithoutDebtsInput>
  }

  export type PartyUpdateWithoutDebtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPartyTypeFieldUpdateOperationsInput | $Enums.PartyType
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutPartiesNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedPartiesNestedInput
  }

  export type PartyUncheckedUpdateWithoutDebtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPartyTypeFieldUpdateOperationsInput | $Enums.PartyType
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAssignedDebtsInput = {
    update: XOR<UserUpdateWithoutAssignedDebtsInput, UserUncheckedUpdateWithoutAssignedDebtsInput>
    create: XOR<UserCreateWithoutAssignedDebtsInput, UserUncheckedCreateWithoutAssignedDebtsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedDebtsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedDebtsInput, UserUncheckedUpdateWithoutAssignedDebtsInput>
  }

  export type UserUpdateWithoutAssignedDebtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUpdateManyWithoutCreatedByNestedInput
    assignedParties?: PartyUpdateManyWithoutAssignedToNestedInput
    debts?: DebtUpdateManyWithoutCreatedByNestedInput
    payments?: PaymentUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedDebtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedParties?: PartyUncheckedUpdateManyWithoutAssignedToNestedInput
    debts?: DebtUncheckedUpdateManyWithoutCreatedByNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserUpsertWithoutDebtsInput = {
    update: XOR<UserUpdateWithoutDebtsInput, UserUncheckedUpdateWithoutDebtsInput>
    create: XOR<UserCreateWithoutDebtsInput, UserUncheckedCreateWithoutDebtsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDebtsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDebtsInput, UserUncheckedUpdateWithoutDebtsInput>
  }

  export type UserUpdateWithoutDebtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUpdateManyWithoutCreatedByNestedInput
    assignedParties?: PartyUpdateManyWithoutAssignedToNestedInput
    assignedDebts?: DebtUpdateManyWithoutAssignedToNestedInput
    payments?: PaymentUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutDebtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedParties?: PartyUncheckedUpdateManyWithoutAssignedToNestedInput
    assignedDebts?: DebtUncheckedUpdateManyWithoutAssignedToNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCreatedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutDebtInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutDebtInput, PaymentUncheckedUpdateWithoutDebtInput>
    create: XOR<PaymentCreateWithoutDebtInput, PaymentUncheckedCreateWithoutDebtInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutDebtInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutDebtInput, PaymentUncheckedUpdateWithoutDebtInput>
  }

  export type PaymentUpdateManyWithWhereWithoutDebtInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutDebtInput>
  }

  export type DebtCreateWithoutPaymentsInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    party: PartyCreateNestedOneWithoutDebtsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedDebtsInput
    createdBy?: UserCreateNestedOneWithoutDebtsInput
  }

  export type DebtUncheckedCreateWithoutPaymentsInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    partyId: string
    assignedToId?: string | null
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtCreateOrConnectWithoutPaymentsInput = {
    where: DebtWhereUniqueInput
    create: XOR<DebtCreateWithoutPaymentsInput, DebtUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyCreateNestedManyWithoutCreatedByInput
    assignedParties?: PartyCreateNestedManyWithoutAssignedToInput
    debts?: DebtCreateNestedManyWithoutCreatedByInput
    assignedDebts?: DebtCreateNestedManyWithoutAssignedToInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedParties?: PartyUncheckedCreateNestedManyWithoutAssignedToInput
    debts?: DebtUncheckedCreateNestedManyWithoutCreatedByInput
    assignedDebts?: DebtUncheckedCreateNestedManyWithoutAssignedToInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type DebtUpsertWithoutPaymentsInput = {
    update: XOR<DebtUpdateWithoutPaymentsInput, DebtUncheckedUpdateWithoutPaymentsInput>
    create: XOR<DebtCreateWithoutPaymentsInput, DebtUncheckedCreateWithoutPaymentsInput>
    where?: DebtWhereInput
  }

  export type DebtUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: DebtWhereInput
    data: XOR<DebtUpdateWithoutPaymentsInput, DebtUncheckedUpdateWithoutPaymentsInput>
  }

  export type DebtUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    party?: PartyUpdateOneRequiredWithoutDebtsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedDebtsNestedInput
    createdBy?: UserUpdateOneWithoutDebtsNestedInput
  }

  export type DebtUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    partyId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUpdateManyWithoutCreatedByNestedInput
    assignedParties?: PartyUpdateManyWithoutAssignedToNestedInput
    debts?: DebtUpdateManyWithoutCreatedByNestedInput
    assignedDebts?: DebtUpdateManyWithoutAssignedToNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedParties?: PartyUncheckedUpdateManyWithoutAssignedToNestedInput
    debts?: DebtUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedDebts?: DebtUncheckedUpdateManyWithoutAssignedToNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyCreateNestedManyWithoutCreatedByInput
    assignedParties?: PartyCreateNestedManyWithoutAssignedToInput
    debts?: DebtCreateNestedManyWithoutCreatedByInput
    assignedDebts?: DebtCreateNestedManyWithoutAssignedToInput
    payments?: PaymentCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parties?: PartyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedParties?: PartyUncheckedCreateNestedManyWithoutAssignedToInput
    debts?: DebtUncheckedCreateNestedManyWithoutCreatedByInput
    assignedDebts?: DebtUncheckedCreateNestedManyWithoutAssignedToInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUpdateManyWithoutCreatedByNestedInput
    assignedParties?: PartyUpdateManyWithoutAssignedToNestedInput
    debts?: DebtUpdateManyWithoutCreatedByNestedInput
    assignedDebts?: DebtUpdateManyWithoutAssignedToNestedInput
    payments?: PaymentUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parties?: PartyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedParties?: PartyUncheckedUpdateManyWithoutAssignedToNestedInput
    debts?: DebtUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedDebts?: DebtUncheckedUpdateManyWithoutAssignedToNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type PartyCreateManyCreatedByInput = {
    id?: string
    type: $Enums.PartyType
    code?: string | null
    name: string
    phone?: string | null
    email?: string | null
    taxCode?: string | null
    address?: string | null
    note?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyCreateManyAssignedToInput = {
    id?: string
    type: $Enums.PartyType
    code?: string | null
    name: string
    phone?: string | null
    email?: string | null
    taxCode?: string | null
    address?: string | null
    note?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtCreateManyCreatedByInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    partyId: string
    assignedToId?: string | null
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtCreateManyAssignedToInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    partyId: string
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyCreatedByInput = {
    id?: string
    debtId: string
    amount: Decimal | DecimalJsLike | number | string
    paidAt: Date | string
    method?: $Enums.PaymentMethod
    referenceNo?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateManyActorInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PartyUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPartyTypeFieldUpdateOperationsInput | $Enums.PartyType
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutAssignedPartiesNestedInput
    debts?: DebtUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPartyTypeFieldUpdateOperationsInput | $Enums.PartyType
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debts?: DebtUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPartyTypeFieldUpdateOperationsInput | $Enums.PartyType
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPartyTypeFieldUpdateOperationsInput | $Enums.PartyType
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutPartiesNestedInput
    debts?: DebtUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPartyTypeFieldUpdateOperationsInput | $Enums.PartyType
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debts?: DebtUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPartyTypeFieldUpdateOperationsInput | $Enums.PartyType
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    party?: PartyUpdateOneRequiredWithoutDebtsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedDebtsNestedInput
    payments?: PaymentUpdateManyWithoutDebtNestedInput
  }

  export type DebtUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    partyId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutDebtNestedInput
  }

  export type DebtUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    partyId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    party?: PartyUpdateOneRequiredWithoutDebtsNestedInput
    createdBy?: UserUpdateOneWithoutDebtsNestedInput
    payments?: PaymentUpdateManyWithoutDebtNestedInput
  }

  export type DebtUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    partyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutDebtNestedInput
  }

  export type DebtUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    partyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debt?: DebtUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    debtId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    debtId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtCreateManyPartyInput = {
    id?: string
    code: string
    type: $Enums.DebtType
    assignedToId?: string | null
    title: string
    invoiceNo?: string | null
    orderNo?: string | null
    contractNo?: string | null
    poNo?: string | null
    description?: string | null
    originalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    currency?: string
    issueDate: Date | string
    dueDate: Date | string
    status?: $Enums.DebtStatus
    collectionStatus?: $Enums.CollectionStatus
    nextFollowUpAt?: Date | string | null
    followUpNote?: string | null
    createdById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtUpdateWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutAssignedDebtsNestedInput
    createdBy?: UserUpdateOneWithoutDebtsNestedInput
    payments?: PaymentUpdateManyWithoutDebtNestedInput
  }

  export type DebtUncheckedUpdateWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutDebtNestedInput
  }

  export type DebtUncheckedUpdateManyWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDebtTypeFieldUpdateOperationsInput | $Enums.DebtType
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    invoiceNo?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: NullableStringFieldUpdateOperationsInput | string | null
    contractNo?: NullableStringFieldUpdateOperationsInput | string | null
    poNo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    originalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDebtStatusFieldUpdateOperationsInput | $Enums.DebtStatus
    collectionStatus?: EnumCollectionStatusFieldUpdateOperationsInput | $Enums.CollectionStatus
    nextFollowUpAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyDebtInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paidAt: Date | string
    method?: $Enums.PaymentMethod
    referenceNo?: string | null
    note?: string | null
    createdById?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutDebtInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutDebtInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutDebtInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}