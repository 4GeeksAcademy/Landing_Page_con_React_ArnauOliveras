import React from "react";


const Jumbotron = () => {
    return (
        <section class="p-4 container ">
            <div class="row bg-light rounded">
                <div class=" mx-auto py-4">
                    <h1 class="fw-light">A Warm Welcome</h1>
                    <p class="lead text-body-secondary">Something short and leading about the collection below its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    <p>
                        <a href="#" class="btn btn-primary my-2">Call to action!</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Jumbotron;