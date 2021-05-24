class DigitalClock {
    constructor(element) {
        this.element = element;
        console.log(this.element);
    }
    start() {
        setInterval(() => {
            this.upDate();
        }, 1000)

    }
    upDate() {
        const parts = this.getTimeParts();
        const secondsFormatted = parts.seconds.toString().padStart(2, "0");
        const minuteFormatted = parts.minute.toString().padStart(2, "0");

        const timeFormatted = `${parts.hour}:${minuteFormatted}:${secondsFormatted}`;

        const amPm = parts.IsAm ? "AM" : "PM";
        this.element.querySelector(".clock_time").textContent = timeFormatted;
        this.element.querySelector(".clock_ampm").textContent = amPm;
    }
    getTimeParts() {
        const now = new Date();
        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            seconds: now.getSeconds(),
            IsAm: now.getHours() < 12

        };
    }
}
const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);
console.log(clockObject.getTimeParts());
clockObject.upDate();
clockObject.start();