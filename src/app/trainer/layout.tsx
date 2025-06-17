"use client"
import withAuth from "@/hoc/withAuth";

const Trainer =({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)=> {
    return (
        <>
            { children }
        </>
    );
}
export default withAuth(Trainer, { allowedRoles: ['admin'] })