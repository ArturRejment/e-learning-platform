export const RouterPath = {
  Login: '/login',
  Register: '/register',
  Home: '/',
  Admin: '/admin',
  CourseDetail: '/course/:courseId',
  JoinCourse: '/join-course',
  CourseCodesGeneration: '/generate-course-codes',
  CodesGeneration: '/generate-codes',
} as const;

type CreatePathArgs =
  | { path: typeof RouterPath.Login }
  | { path: typeof RouterPath.Register }
  | { path: typeof RouterPath.Home }
  | { path: typeof RouterPath.Admin }
  | { path: typeof RouterPath.CourseDetail; params: { courseId: string } }
  | { path: typeof RouterPath.JoinCourse }
  | { path: typeof RouterPath.CourseCodesGeneration }
  | { path: typeof RouterPath.CodesGeneration };

export function createPath(args: CreatePathArgs) {
  // routes without params
  if (!('params' in args)) return args.path;

  // create a path by replacing params in the route definition
  return Object.entries(args.params).reduce(
    (path: string, [param, value]) => path.replace(`:${param}`, `${value}`),
    args.path,
  );
}

type RouterPathType = typeof RouterPath;
type PathParams<T> = T extends { params: infer P } ? P : never;
type ValueOf<T> = T[keyof T];
type KeyOfValue<T, V> = ValueOf<{ [K in keyof T]: T[K] extends V ? K : never }>;

export type RouterPathParams = {
  [K in CreatePathArgs['path'] as KeyOfValue<RouterPathType, K>]: PathParams<
    Extract<CreatePathArgs, { path: K }>
  >;
};
