import Footer from "./components/Footer";
import Form from "./components/Form";
import Heading from "./components/Heading";
import Todos from "./components/Todos";

const App = () => {
    return (
        <main className="mx-auto mt-10 w-[600px] rounded border border-solid border-gray-500 bg-white px-4 py-6">
            <Heading />
            <Form />
            <Todos />
            <Footer />
        </main>
    );
};

export default App;
