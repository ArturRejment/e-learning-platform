export const ROUTER_PATH = {
  LOGIN: '/login',
  REGISTER: '/register',
  HOME: '/',
  ADMIN: '/admin',
  COURSE_DETAIL: '/course/:courseId',
  JOIN_COURSE: '/join-course',
  COURSE_CODE_GENERATION: '/generate-course-codes',
  CODE_GENERATION: '/generate-codes',
} as const;

type CreatePathArgs =
  | { path: typeof ROUTER_PATH.LOGIN }
  | { path: typeof ROUTER_PATH.REGISTER }
  | { path: typeof ROUTER_PATH.HOME }
  | { path: typeof ROUTER_PATH.ADMIN }
  | { path: typeof ROUTER_PATH.COURSE_DETAIL; params: { courseId: string } }
  | { path: typeof ROUTER_PATH.JOIN_COURSE }
  | { path: typeof ROUTER_PATH.COURSE_CODE_GENERATION }
  | { path: typeof ROUTER_PATH.CODE_GENERATION };

export function createPath(args: CreatePathArgs) {
  // routes without params
  if (!('params' in args)) return args.path;

  // create a path by replacing params in the route definition
  return Object.entries(args.params).reduce(
    (path: string, [param, value]) => path.replace(`:${param}`, `${value}`),
    args.path,
  );
}

type RouterPathType = typeof ROUTER_PATH;
type PathParams<T> = T extends { params: infer P } ? P : never;
type ValueOf<T> = T[keyof T];
type KeyOfValue<T, V> = ValueOf<{ [K in keyof T]: T[K] extends V ? K : never }>;

export type RouterPathParams = {
  [K in CreatePathArgs['path'] as KeyOfValue<RouterPathType, K>]: PathParams<
    Extract<CreatePathArgs, { path: K }>
  >;
};
