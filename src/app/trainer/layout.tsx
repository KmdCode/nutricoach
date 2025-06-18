"use client"
import withAuth from "@/hoc/withAuth";
import TrainerNavbar from "@/components/TrainerNavbar/TrainerNavbar";

const Trainer =({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)=> {
    return (
        <>
            <TrainerNavbar/>
            { children }
        </>
    );
}
export default withAuth(Trainer, { allowedRoles: ['admin'] })