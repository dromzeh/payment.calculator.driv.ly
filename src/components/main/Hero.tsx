/* 
different iterations of the hero text, e.g:
    Budget for your perfect car, qualify and apply within minutes!
    Budget, qualify and apply within minutes for your perfect car!
    Budget, qualify and apply within minutes!
*/

export default function Hero() {
    return (
        <div className="mb-4 text-center">
            <h1 className="text-3xl font-bold">Car Payment Calculator</h1>
            <h2 className="text-lg text-zinc-600">
                Budget, qualify and apply within minutes for your perfect car!
            </h2>
        </div>
    )
}
