import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone, selectHideDone, selectAreTasksEmpty } from "../tasksSlice";
import { ButtonsWrapper, Button } from "./styled";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const hideDone = useSelector(selectHideDone);
    const tasks = useSelector(selectTasks);

    const dispatch = useDispatch();

    return (
        <ButtonsWrapper>
            {!areTasksEmpty && (
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