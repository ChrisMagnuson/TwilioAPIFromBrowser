let $APIRoot = "https://api.twilio.com"

function CreateParameterVariables (param) {

}

function InvokeTwilioAPIFunction ({
    $HttpMethod,
    $Resource,
    $SubResource,
    $Body,
    $Header,
    $SubResourceSid,
    $Debug
}) {
    console.log($HttpMethod);
}
InvokeTwilioAPIFunction ({$HttpMethod: "Post"})

    // if ($Debug) {
    //     Set-CertificatePolicy -TrustAllCerts
    // }
    
    // $Credential = Get-TwilioCredential

    // $URI = if (-not $SubResource ) {
    //     $APIRoot +"/2010-04-01/$Resource.json"
    // } else {
    //     if (-not $SubResourceSid ) {
    //         $APIRoot +"/2010-04-01/$Resource/$($Credential.UserName)/$SubResource.json?PageSize=350"
    //     } else { 
    //         $APIRoot +"/2010-04-01/$Resource/$($Credential.UserName)/$SubResource/$SubResourceSid.json"
    //     }    
    // }

    // #$Response = if ($Header) {
    // #    Invoke-RestMethod -Method $HttpMethod -Credential $Credential -Uri $URI -Header $Header
    // #} else {
    // #    Invoke-RestMethod -Method $HttpMethod -Credential $Credential -Uri $URI
    // #}

    // $Response = if ($Body) {
    //     Invoke-RestMethod -Method $HttpMethod -Credential $Credential -Uri $URI  -Body $Body
    // } else {
    //     Invoke-RestMethod -Method $HttpMethod -Credential $Credential -Uri $URI
    // }
    
    // $Response
