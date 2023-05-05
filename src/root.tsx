// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Route,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Navbar></Navbar>
            <Routes>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
