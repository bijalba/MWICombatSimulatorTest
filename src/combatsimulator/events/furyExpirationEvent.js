import CombatEvent from "./combatEvent";

class FuryExpirationEvent extends CombatEvent {
    static type = "furyExpiration";
    static maxFuryStacks = 5;

    constructor(time, furyAmount, source) {
        super(FuryExpirationEvent.type, time);
        this.furyAmount = Math.min(
            furyAmount + 1,
            FuryExpirationEvent.maxFuryStacks
        );
        this.source = source;
    }
}

export default FuryExpirationEvent;