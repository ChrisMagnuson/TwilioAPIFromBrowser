let $APIRoot = "https://api.twilio.com"

const Mandatory = function ($Name) {
    throw new Error(`The ${$Name} parameter is mandatory`);
};  

function InvokeTwilioAPIFunction ({
    $HttpMethod,
    $Resource,
    $SubResource,
    $Body,
    $Header,
    $SubResourceSid,
    $Credential,
    $Debug
}) {
    $URL = GetTwilioApiURL(arguments[0]);
    $Response = ($Body) ? (
        ""
        // Invoke-RestMethod -Method $HttpMethod -Credential $Credential -Uri $URI -Body $Body
    ) : (
        ""
        // Invoke-RestMethod -Method $HttpMethod -Credential $Credential -Uri $URI
    )
    
    //$Response
}

function GetTwilioApiURL ({
    $Resource = Mandatory("Resource"),
    $SubResource,
    $SubResourceSid,
    $Credential

}) {
    if (! $SubResource ) {
        return $APIRoot + `/2010-04-01/${$Resource}.json`
    } else {
        if (! $SubResourceSid ) {
            return $APIRoot + `/2010-04-01/${$Resource}/${$Credential.UserName})/${$SubResource}.json?PageSize=350`
        } else { 
            return $APIRoot + `/2010-04-01/${$Resource}/${$Credential.UserName}/${$SubResource}/${$SubResourceSid}.json`
        }
    }
}

InvokeTwilioAPIFunction ({$HttpMethod: "Post", $Resource: "Phone"})

    // if ($Debug) {
    //     Set-CertificatePolicy -TrustAllCerts
    // }
    
    // $Credential = Get-TwilioCredential


    // #$Response = if ($Header) {
    // #    Invoke-RestMethod -Method $HttpMethod -Credential $Credential -Uri $URI -Header $Header
    // #} else {
    // #    Invoke-RestMethod -Method $HttpMethod -Credential $Credential -Uri $URI
    // #}

