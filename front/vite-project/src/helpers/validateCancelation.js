export const canCancelAppointment = (appointmentDate) => {
    const today = new Date();
    const appointment = new Date(appointmentDate.split('/').reverse().join('/'));

    // Check if the appointment date is later than today
    if (appointment > today) {
        // Check if the appointment date is at least one day after today
        const timeDifference = appointment - today;
        const dayDifference = timeDifference / (1000 * 3600 * 24);
        return dayDifference >= 1;
    }

    return false;
};