import { Suspense, ReactElement, FC } from "react";
import Loader from "./Loader";

const LazyLoading =
  <P extends object>(Component: FC<P>): FC<P> =>
  (props: P): ReactElement => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default LazyLoading;
