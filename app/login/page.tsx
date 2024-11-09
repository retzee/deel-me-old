"use client";

import Input from "@/src/components/ui/input/Input";
import Button from "@/src/components/ui/button/Button";
import MiniGridWrapper from "@/src/components/ui/wrappers/MiniGridWrapper";

export default function Login (){
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
                User Login
            </h2>
            <form onSubmit={formSubmitHandler} className="space-y-4 md:space-y-6">
                <Input 
                    label="Email" 
                    id="email" 
                    type="email" 
                    onChange={emailChangeHandler} 
                />
                <Input 
                    label="Password" 
                    id="password" 
                    type="password" 
                    onChange={passwordChangeHandler} 
                />
                <Button id="login" value="Login" />
            </form>
        </MiniGridWrapper>
    );
}