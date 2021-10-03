import { OctokitResponse } from "../types";
import { APIGatewayProxyStructuredResultV2 } from "aws-lambda";

export function sendResponse(
  octokitResponse: OctokitResponse
): APIGatewayProxyStructuredResultV2 {
  return {
    statusCode: octokitResponse.status,
    headers: octokitResponse.headers,
    body: octokitResponse.text,
  };
}
