function checkEvenOdd() {
    const number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid number!',
        confirmButtonColor: '#ff6f61',
      });
      return;
    }

    if (number % 2 === 0) {
      Swal.fire({
        icon: 'success',
        title: 'Even Number',
        text: `The number ${number} is Even.`,
        confirmButtonColor: '#4caf50',
        background: '#e0ffe0',
      });
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Odd Number',
        text: `The number ${number} is Odd.`,
        confirmButtonColor: '#2196f3',
        background: '#e0f7ff',
      });
    }
  }