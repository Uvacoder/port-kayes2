type user = {
    name: string,
    age: number,
    email: string,
    number: number,
    address: string
}

export default function about() {

    const userData: user = {
        name: "kayes",
        age: 22,
        email: 'kayes.ek8@gmail.com',
        number: 9227220,
        address: "Uttara, Dhaka"
    }

    return (
        <div className="text-white">
            about file {userData.name || userData.age}

        </div>
    )
}
