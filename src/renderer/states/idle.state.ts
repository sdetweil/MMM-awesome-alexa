import { IStateMachineComponents } from "./alexa-state-machine";
import { State } from "./base.state";

export class IdleState extends State {

    constructor(components: IStateMachineComponents) {
        super(components, "idle");
    }

    public onEnter(): void {
        this.components.avs.stopRecording();
        this.components.div.classList.remove("wrapper-active");
        document.body.classList.remove("down-size");
    }

    public broadcast(type: NotificationType, data: any): void {
        this.components.avs.startRecording();
        this.transitionTo(this.allowedStateTransitions.get("listening"));
    }
}
