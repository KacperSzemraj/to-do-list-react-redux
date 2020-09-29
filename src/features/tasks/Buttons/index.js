import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone, selectHideDone } from "../tasksSlice";
import { ButtonsWrapper, Button } from "./styled";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const tasks = useSelector(selectTasks);

    const dispatch = useDispatch();

    return (
        <ButtonsWrapper>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </ButtonsWrapper>
    )
};

export default Buttons;