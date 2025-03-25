import { useBearStore } from "../../utils/store/useBearStore";

type Props = {};

export default function BearIncreaser({ }: Props) {
    const increasePopulation = useBearStore(
        (state: any) => state.increasePopulation
    );
    return <button onClick={increasePopulation}>one up</button>;
}
