// Script written by Hannah Strong <stronghannahc@gmail.com> for James Atkins, March 2017
// Last updated: September 17, 2018

/**
 * @OnlyCurrentDoc
 */
// The above tag restricts access to only the connected document, so this script cannot modify any other document in the user’s drive

/**
 * Calculates anticipated payment from insurance company using BCBS.
 * Note that Medicare rules are the same as BCBS and BCBS BAV, as are MultiPlan at this time
 */

function BCBS_Rate(pos, CPT, CPT_above) {
    var AP_pct = 0 ;
    switch (pos) {
        case 1:
            AP_pct = 1;
            break;
        case 2:
            AP_pct = 0.5;
            break;
        default:
            if(pos >= 3) {
              if (CPT == CPT_above) {
                AP_pct = 0.25;
                break;
              }
              else {
                AP_pct = 0.5;
                break;
              }
            }
            AP_pct = "error, row position out of range";
    }
    return (AP_pct);
}


/**
 * Calculates anticipated payment from insurance company using BCBS BAV.
 * Note that Medicare rules are the same as BCBS and BCBS BAV, as are MultiPlan at this time
 */

function BCBS_BAV_Rate(pos, CPT, CPT_above) {
    var AP_pct = 0 ;
    switch (pos) {
        case 1:
            AP_pct = 1;
            break;
        case 2:
            AP_pct = 0.5;
            break;
        default:
            if(pos >= 3) {
              if (CPT == CPT_above) {
                AP_pct = 0.25;
                break;
              }
              else {
                AP_pct = 0.5;
                break;
              }
            }
            AP_pct = "error, row position out of range";
    }
    return (AP_pct);
}


/**
 * Calculates anticipated payment from insurance company using Oscar.
 */

function Oscar_Rate(pos, CPT, CPT_above) {
    var AP_pct = 0 ;
    switch (pos) {
        case 1:
            AP_pct = 1;
            break;
        case 2:
            AP_pct = 0.5;
            break;
        default:
            if(pos >= 3) {
              if (CPT == CPT_above) {
                AP_pct = 0.25;
                break;
              }
              else {
                AP_pct = 0.5;
                break;
              }
            }
            AP_pct = "error, row position out of range";
    }
    return (AP_pct);
}

/**
 * Calculates anticipated payment from insurance company using MultiPlan.
 * Note that Medicare rules are the same as BCBS and BCBS BAV, as are MultiPlan at this time
 */

function MultiPlan_Rate(pos, CPT, CPT_above) {
    var AP_pct = 0 ;
    switch (pos) {
        case 1:
            AP_pct = 1;
            break;
        case 2:
            AP_pct = 0.5;
            break;
        default:
            if(pos >= 3) {
              if (CPT == CPT_above) {
                AP_pct = 0.25;
                break;
              }
              else {
                AP_pct = 0.5;
                break;
              }
            }
            AP_pct = "error, row position out of range";
    }
    return (AP_pct);
}

/**
 * Calculates anticipated payment from insurance company using CommFirst.
 * Note that Cigna rules are the same as Tricare and CommFirst rules.
 */

function CommFirst_Rate(pos, CPT, CPT_above) {
    var AP_pct = 0 ;
    switch (pos) {
        case 1:
            AP_pct = 1;
            break;
        default:
            if(pos >= 2) {
              AP_pct = 0.5;
              break;
            }else{
              AP_pct = "error, row position out of range";
            }
    }
    return (AP_pct);
}

/**
 * Calculates anticipated payment from insurance company using Medicare.
 * Note that Medicare rules are the same as BCBS and BCBS BAV, as are MultiPlan at this time
 */

function Medicare_Rate(pos, CPT, CPT_above) {
    var AP_pct = 0 ;
    switch (pos) {
        case 1:
            AP_pct = 1;
            break;
        case 2:
            AP_pct = 0.5;
            break;
        default:
            if(pos >= 3) {
              if (CPT == CPT_above) {
                AP_pct = 0.25;
                break;
              }
              else {
                AP_pct = 0.5;
                break;
              }
            }
            AP_pct = "error, row position out of range";
    }
    return (AP_pct);
}

/**
 * Calculates anticipated payment using Cigna rules.
 * Note that Cigna rules are the same as Tricare and CommFirst rules.
 */

function Cigna_Rate(pos, CPT, CPT_above) {
    var AP_pct = 0 ;
    switch (pos) {
        case 1:
            AP_pct = 1;
            break;
        default:
            if(pos >= 2) {
              AP_pct = 0.5;
              break;
            }else{
              AP_pct = "error, row position out of range";
            }
    }
    return (AP_pct);
}

/**
 * Calculates anticipated payment using Tricare rules.
 * Note that Cigna rules are the same as Tricare and CommFirst rules.
 */

function Tricare_Rate(pos, CPT, CPT_above) {
    var AP_pct = 0 ;
    switch (pos) {
        case 1:
            AP_pct = 1;
            break;
        default:
            if(pos >= 2) {
              AP_pct = 0.5;
              break;
            }else{
              AP_pct = "error, row position out of range";
            }
    }
    return (AP_pct);
}


/**
 * Calculates  anticipated payment using UHC
 */

function UHC_Rate(pos) {
    var AP_pct = 0 ;
    switch (pos) {
        case 1:
            AP_pct = 1;
            break;
        default:
            if(pos >= 2) {
              AP_pct = 0.5;
              break;
            }
            AP_pct = "error, row position out of range";
    }
    return (AP_pct);
}


/**
 * Calculates anticipated payment from insurance company using Aetna.
 * Note that Aetna rules are the same as Humana
 */

function Aetna_Rate(pos) {
    var AP_pct = 0 ;
    switch (pos) {
        case 1:
            AP_pct = 1;
            break;
        case 2:
            AP_pct = 0.5;
            break;
        default:
            if(pos >= 3) {
              AP_pct = 0.25;
              break;
            }
            AP_pct = "error, row position out of range";
    }
    return (AP_pct);
}

/**
 * Calculates anticipated payment from insurance company using Humana.
 * Note that Aetna rules are the same as Humana
 */

function Humana_Rate(pos) {
    var AP_pct = 0 ;
    switch (pos) {
        case 1:
            AP_pct = 1;
            break;
        case 2:
            AP_pct = 0.5;
            break;
        default:
            if(pos >= 3) {
              AP_pct = 0.25;
              break;
            }
            AP_pct = "error, row position out of range";
    }
    return (AP_pct);
}