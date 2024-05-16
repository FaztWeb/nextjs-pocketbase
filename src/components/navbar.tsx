import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="container py-4 flex justify-between">
        <h1 className="font-bold text-lg">
            NextCommerce Pocket
        </h1>

        <ul className="flex gap-x-2 items-center">
            <li>
                <Link href="/"
                    className="text-sm font-semibold text-primary"
                >Products</Link>
            </li>
            <li>
                <ModeToggle />
            </li>
        </ul>
    </nav>
  )
}