"use client"
import withAuth from "@/hoc/withAuth";
import ClientNavBar from "@/components/clientNavbar/ClientNavbar";

const Client =({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)=> {
    return (
        <>
            <ClientNavBar/>
            { children }
        </>
    );
}
export default withAuth(Client, { allowedRoles: ['user'] })