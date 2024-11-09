"use client";

import Input from "@/src/components/ui/input/Input";
import Button from "@/src/components/ui/button/Button";
import MiniGridWrapper from "@/src/components/ui/wrappers/MiniGridWrapper";

export default function Signup (){
    const emailChangeHandler = (e: React.FormEvent) => {
        //console.log(e.target.value);
    }
    const passwordChangeHandler = (e: React.FormEvent) => {
        //console.log(e.target.value);
    }
    const formSubmitHandler = (e: React.FormEvent) => {
        //e.preventDefault();
        //console.log('Form submit');
    }
    
    return (
        <MiniGridWrapper>
            <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                User Signup
            </h2>
            <form onSubmit={formSubmitHandler} className="space-y-4 md:space-y-6">
                <Input 
                    label="First Name" 
                    id="first_name" 
                    type="text" 
                />
                <Input 
                    label="Surname" 
                    id="surname" 
                    type="text" 
                />
                <Input 
                    label="Email" 
                    id="email" 
                    type="email" 
                />
                <Input 
                    label="Password" 
                    id="password" 
                    type="password"  
                />
                <Button id="signup" value="Sign Me Up" />
            </form>
        </MiniGridWrapper>
    );
}