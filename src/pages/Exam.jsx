import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ExamContainer from "../components/Layout/ExamContainer";
import PreExamContainer from "../components/Layout/PreExamContainer";

export default function Exam() {
  const [continueSavedProgress, setContinueSavedProgress] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const { examId } = useParams();

  return (
    <div className="flex flex-col items-center justify-start overflow-hidden h-svh font-rubik bg-zinc-100 dark:bg-zinc-500 w-svw">
      {inProgress && (
        <ExamContainer
          setInProgress={setInProgress}
          examId={examId}
          continueSavedProgress={continueSavedProgress}
        />
      )}
      {!continueSavedProgress && !inProgress && (
        <PreExamContainer
          setInProgress={setInProgress}
          setContinueSavedProgress={setContinueSavedProgress}
        />
      )}
    </div>
  );
}
