// Function to check for the modal dialog
function checkForModalDialog() {
          const modalDialog = document.querySelector('.javascriptMaterialdesignGm3WizDialogRefactored-dialog__surface');
	const modalDialog1 = document.querySelector('.modal-dialog.docs-dialog.docs-error-dialog');
          if (modalDialog || modalDialog1) {
            console.log('Modal dialog detected on Google subpage');
            try {
              if(modalDialog){
              document.querySelector(".javascriptMaterialdesignGm3WizDialogRefactored-dialog__actions button[data-mdc-dialog-action='ok']").click();
              } else if (modalDialog1){
                document.querySelector("button[name='si']").click();
              }
               } catch (error) {
              console.error("Error during sign-in actions:", error);
            }
            //MODIFY DEPENDING ON YOUR AUTHUSER!!!!! SO IT DETECTS IT PROPERLY
          } else if (window.location.href.includes("confirmidentifier?authuser=1")) {
            // If on the second page, perform sign-in actions
            try {
              // Wait until the "Next" button becomes visible
              const intervalId = setInterval(() => {
                const nextButton = document.querySelector("button.VfPpkd-LgbsSe.nCP5yc");
                if (nextButton && nextButton.offsetParent !== null) {
                  console.log("Next button found and visible.");
                  clearInterval(intervalId); // Stop checking
                  nextButton.click(); // Click the "Next" button
                  
                  // Wait for the password input field to become available
                  const passwordIntervalId = setInterval(() => {
                    const passwordInput = document.querySelector("div#password input[name='Passwd']");
                    if (passwordInput) {
                      console.log("Password input found.");
                      // Enter the password | ENTER YOUR OWN
                      passwordInput.value = "YOURPASSWORD";
                      clearInterval(passwordIntervalId); // Stop checking
                      
                      // Simulate a click to ensure the field behaves as expected
                      passwordInput.click();

                      // Click the "Next" button after entering the password
                      const passwordNextButton = document.getElementById("passwordNext");
                      if (passwordNextButton) {
                        passwordNextButton.click();
                      } else {
                        console.error("Password Next button not found.");
                      }
                    }
                  }, 0);
                }
              }, 0);
            } catch (error) {
              console.error("Error during sign-in actions:", error);
            }
          }
        }

// Check for the modal dialog periodically
setInterval(checkForModalDialog, 2000); // Adjust the interval as needed
