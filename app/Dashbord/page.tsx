import Quiz from "@/components/Quiz";
import { jsQuizz } from "../../constants";
import Navbar from "@/components/Navbar";
export default function Dashbord() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div>
          <Quiz questions={jsQuizz.questions} />
        </div>
      </div>
    </>
  );
}
