import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import UserLayout from '~/components/layouts/user'

export default function IndexPage() {
  return (<UserLayout>
            <Counter />
          </UserLayout>);
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
