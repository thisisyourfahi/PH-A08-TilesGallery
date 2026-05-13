import React, { Suspense } from 'react';
import LoginPage from './components/LoginPage';

const page = () => {
    return (
        <div>
            <Suspense fallback={<p>Loading....</p>}>
                <LoginPage></LoginPage>
            </Suspense>
        </div>
    );
};

export default page;